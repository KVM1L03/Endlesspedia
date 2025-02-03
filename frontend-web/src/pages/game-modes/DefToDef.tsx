import React, { useState, Suspense } from 'react';
import { getDefinition, getRelatedTerms } from '../../api/definitionsAPI.ts';
import Timer from '../../components/game/Timer.tsx';
import SideBar from '../../components/game/SideBar.tsx';
import SkeletonLoader from '../../components/animation/SkeletonLoader.tsx';
import StepsCounter from '../../components/game/StepsCounter.tsx';
import Button from '../../components/game/Button.tsx';

const TextBox = React.lazy(() => import('../../components/game/TextBox.tsx'));

interface EndlessProps {
    title: string;
    content: string;
    relatedTerms: string[];
    onHighlightClick: (word: string) => void;
}

const DefToDef: React.FC<EndlessProps> = ({ title, content, relatedTerms, onHighlightClick }) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);
    const [currentContent, setCurrentContent] = useState<string>(content);
    const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>(relatedTerms);
    const [loading, setLoading] = useState<boolean>(false);
    const [fromTerm, setFromTerm] = useState<string>('');
    const [toTerm, setToTerm] = useState<string>('');
    const [stepCount, setStepCount] = useState<number>(0);

    const handleClick = async (word: string) => {
        if (currentRelatedTerms.includes(word)) {
            onHighlightClick(word);
            setLoading(true);
            setStepCount(stepCount + 1);

            try {
                const newContent = await getDefinition(word);
                const newRelatedTerms = await getRelatedTerms(word);
                setCurrentTitle(word);
                setCurrentContent(newContent);
                setCurrentRelatedTerms(newRelatedTerms);
            } catch (error) {
                console.error('Error fetching new definition:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const newContent = await getDefinition(fromTerm);
            const newRelatedTerms = await getRelatedTerms(fromTerm);
            setCurrentTitle(fromTerm);
            setCurrentContent(newContent);
            setCurrentRelatedTerms(newRelatedTerms);
        } catch (error) {
            console.error('Error fetching new definition:', error);
        } finally {
            setLoading(false);
        }
    };

    const popularPaths = [
        { text: '🥇 Top Definition 1', onClick: () => handleClick('Top Definition 1') },
        { text: '🥈 Top Definition 2', onClick: () => handleClick('Top Definition 2') },
        { text: '🥉 Top Definition 3', onClick: () => handleClick('Top Definition 3') },
        { text: 'Top Definition 4', onClick: () => handleClick('Top Definition 4') },
        { text: 'Top Definition 5', onClick: () => handleClick('Top Definition 5') },
    ];

    return (
        <div className="bg-white text-black min-h-screen flex">
            <SideBar title="Popular Paths" buttons={popularPaths} >
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
                    <Button color='#ff8f12' text='Submit' onClick={handleSubmit} textColor='black'/>
                </div>
            </SideBar>
            <div className="w-3/4 flex flex-col relative">
                <div className="flex justify-end p-4">
                    <Timer time="00:00" />
                    <StepsCounter steps={stepCount} />
                </div>
                <div className="flex-1 my-24 overflow-auto">
                    <Suspense fallback={<SkeletonLoader />}>
                        {loading ? (
                            <SkeletonLoader />
                        ) : (
                            <div className="relative">
                                
                                <TextBox
                                    title={currentTitle}
                                    content={currentContent}
                                    relatedTerms={currentRelatedTerms}
                                    onHighlightClick={onHighlightClick}
                                    handleClick={handleClick}
                                />
                            </div>
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default DefToDef;