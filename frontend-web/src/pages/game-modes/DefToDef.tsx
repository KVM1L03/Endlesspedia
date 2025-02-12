import React, { useState, useEffect, Suspense } from 'react';
import { getDefinition, getRelatedTerms } from '../../api/definitionsAPI.ts';
import SideBar from '../../components/game/SideBar.tsx';
import SkeletonLoader from '../../components/animation/SkeletonLoader.tsx';
import Button from '../../components/game/Button.tsx';
import WinPopout from '../../components/game/WinPopout.tsx';
import GameInfo from '../../components/game/d2d/GameInfo.tsx';

const TextBox = React.lazy(() => import('../../components/game/TextBox.tsx'));

interface DefToDefProps {
    title: string;
    content: string;
    relatedTerms: string[];
    onHighlightClick?: (word: string) => void;
}

const DefToDef: React.FC<DefToDefProps> = ({ title, content, relatedTerms }) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);
    const [currentContent, setCurrentContent] = useState<string>(content);
    const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>(relatedTerms);
    const [loading, setLoading] = useState<boolean>(false);
    const [fromTerm, setFromTerm] = useState<string>('');
    const [toTerm, setToTerm] = useState<string>('');
    const [stepCount, setStepCount] = useState<number>(0);
    const [showAnimation, setShowAnimation] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [timerRunning, setTimerRunning] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
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

        if (normalizedRelatedTerms.includes(normalizedWord)) {

            setLoading(true);
            setStepCount(stepCount + 1);

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
                console.error('Error fetching new definition:', error);
            } finally {
                setLoading(false);
            }
        } else {
            console.log(`Word not found in currentRelatedTerms: ${currentRelatedTerms}`);
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        setTime(0);
        setStepCount(0);
        setTimerRunning(true);
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
            <SideBar title='Choose Path'>
                <div className="p-4 bg-gray-100 rounded-lg shadow-md font-robotoMono">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">From:</label>
                        <input
                            type="text"
                            value={fromTerm}
                            onChange={(e) => setFromTerm(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex justify-center mb-4">
                        <span className="text-xl">↓</span>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">To:</label>
                        <input
                            type="text"
                            value={toTerm}
                            onChange={(e) => setToTerm(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black-500 sm:text-sm"
                        />
                    </div>
                    <Button color='#ff8f12' text='Submit' onClick={handleSubmit} textColor='black' />
                </div>
            </SideBar>
            <div className="w-full md:w-3/4 flex flex-col relative mt-4 md:mt-0">
                <div className="fixed top-16 right-0 p-4 flex justify-end space-x-4">
                    <GameInfo time={formatTime(time)} steps={stepCount} />
                </div>
                <div className="flex-1 overflow-auto mt-16 md:mt-0">
                    <Suspense fallback={<SkeletonLoader />}>
                        {loading ? (
                            <SkeletonLoader />
                        ) : (
                            <div className="relative">
                                <TextBox
                                    title={currentTitle}
                                    content={currentContent}
                                    relatedTerms={currentRelatedTerms}
                                    handleClick={handleClick}
                                />
                            </div>
                        )}
                    </Suspense>
                </div>
            </div>
            <WinPopout steps={stepCount} time={formatTime(time)} show={showAnimation} onAnimationEnd={() => setShowAnimation(false)} />
        </div>
    );
};

export default DefToDef;