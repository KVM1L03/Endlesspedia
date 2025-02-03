import React, { useState, Suspense } from 'react';
import { getDefinition, getRelatedTerms } from '../../api/definitionsAPI.ts';
import Timer from '../../components/game/Timer.tsx';
import SideBar from '../../components/game/SideBar.tsx';
import SkeletonLoader from '../../components/animation/SkeletonLoader.tsx';

const TextBox = React.lazy(() => import('../../components/game/TextBox.tsx'));

interface EndlessProps {
    title: string;
    content: string;
    relatedTerms: string[];
    onHighlightClick: (word: string) => void;
}

const Endless: React.FC<EndlessProps> = ({ title, content, relatedTerms, onHighlightClick }) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);
    const [currentContent, setCurrentContent] = useState<string>(content);
    const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>(relatedTerms);
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = async (word: string) => {
        onHighlightClick(word);
        setLoading(true);

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
    };

    const buttons = [
        { text: 'Level 1: The Beginning (100 terms)', color: '#ff8f12', textColor: 'black', onClick: () => console.log('Level 1 clicked') },
        { text: 'Level 2: Into the forest (500 terms)', color: '#ffedd9', textColor: 'black', onClick: () => console.log('Level 2 clicked') },
        { text: 'Level 3: Mountain Climb (1000+ terms)', color: '#d3d3d3', textColor: 'black', onClick: () => console.log('Level 3 clicked') },
    ];

    return (
        <div className="bg-white text-black min-h-screen flex">
            <SideBar title="Achievements" buttons={buttons} />
            <div className="w-3/4 flex flex-col relative">
                <div className="flex justify-end p-4">
                    <Timer time="00:00" />
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
                                onHighlightClick={onHighlightClick}
                                handleClick={handleClick}
                            />
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Endless;