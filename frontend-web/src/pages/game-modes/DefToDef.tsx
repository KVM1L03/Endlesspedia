import React, { useState, useEffect, Suspense } from 'react';
import { getDefinition, getRelatedTerms } from '../../api/definitionsAPI.ts';
import SideBar from '../../components/game/SideBar.tsx';
import SkeletonLoader from '../../components/animation/SkeletonLoader.tsx';
import WinPopout from '../../components/game/WinPopout.tsx';
import GameInfo from '../../components/game/GameInfo.tsx';
import DefToDefForm from '../../components/game/DefToDefForm.tsx';

const TextBox = React.lazy(() => import('../../components/game/TextBox.tsx'));

interface DefToDefProps {
    title: string;
    content: string;
    relatedTerms: string[];
}

const DefToDef: React.FC<DefToDefProps> = ({ title, content, relatedTerms }) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);
    const [currentContent, setCurrentContent] = useState<string>(content);
    const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>(relatedTerms);
    const [loading, setLoading] = useState<boolean>(false);
    const [stepCount, setStepCount] = useState<number>(0);
    const [showAnimation, setShowAnimation] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const [toTerm, setToTerm] = useState<string>('');

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerRunning) {
            timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [timerRunning]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleClick = async (word: string) => {
        const normalizedWord = word.trim().toLowerCase();
        const normalizedRelatedTerms = currentRelatedTerms.map(term => term.trim().toLowerCase());

        if (!normalizedRelatedTerms.includes(normalizedWord)) {
            return;
        }

        setLoading(true);
        setStepCount(prev => prev + 1);

        try {
            const newContent = await getDefinition(word);
            const newRelatedTerms = await getRelatedTerms(word);
            setCurrentTitle(word);
            setCurrentContent(newContent.content || '');
            setCurrentRelatedTerms(newRelatedTerms.links || []);
            window.scrollTo(0, 0);
            if (word === toTerm) {
                setShowAnimation(true);
                setTimerRunning(false);
            }
        } catch (error) {
            console.error('Error fetching definition:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (fromTerm: string, toTerm: string) => {
        setLoading(true);
        setTime(0);
        setStepCount(0);
        setTimerRunning(true);
        setToTerm(toTerm);

        try {
            const newContent = await getDefinition(fromTerm);
            const newRelatedTerms = await getRelatedTerms(fromTerm);
            setCurrentTitle(fromTerm);
            setCurrentContent(newContent.content || '');
            setCurrentRelatedTerms(newRelatedTerms.links || []);
            window.scrollTo(0, 0);
            if (fromTerm === toTerm) {
                setShowAnimation(true);
                setTimerRunning(false);
            }
        } catch (error) {
            console.error('Error fetching new definition:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white text-black min-h-screen flex flex-col md:flex-row">
            <SideBar title="Choose Path">
                <DefToDefForm onSubmit={handleSubmit} loading={loading} />
            </SideBar>

            <div className="flex-1 flex flex-col px-4 md:px-8 lg:px-12 pt-20">
                <div className="flex justify-end w-full mb-4">
                    <GameInfo time={formatTime(time)} steps={stepCount} />
                </div>

                <div className="flex-1 overflow-auto">
                    <Suspense fallback={<SkeletonLoader />}>
                        {loading ? (
                            <SkeletonLoader />
                        ) : (
                            <TextBox
                                title={currentTitle}
                                content={currentContent}
                                relatedTerms={currentRelatedTerms}
                                handleClick={handleClick}
                            />
                        )}
                    </Suspense>
                </div>
            </div>

            <WinPopout
                steps={stepCount}
                time={formatTime(time)}
                show={showAnimation}
                onAnimationEnd={() => setShowAnimation(false)}
            />
        </div>
    );
};

export default DefToDef;