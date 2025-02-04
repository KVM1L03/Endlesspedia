import React, { useState, useEffect, Suspense } from 'react';
import { getDefinition, getRelatedTerms } from '../../api/definitionsAPI.ts';
import { fetchDataForEndless } from '../../api/dataFetcherEndless.ts';
import Timer from '../../components/game/Timer.tsx';
import SideBar from '../../components/game/SideBar.tsx';
import SkeletonLoader from '../../components/animation/SkeletonLoader.tsx';

const TextBox = React.lazy(() => import('../../components/game/TextBox.tsx'));

interface EndlessProps {
    onHighlightClick: (word: string) => void;
}

const Endless: React.FC<EndlessProps> = ({ onHighlightClick }) => {
    const [currentTitle, setCurrentTitle] = useState<string>('Loading...');
    const [currentContent, setCurrentContent] = useState<string>('Loading...');
    const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { title, content, relatedTerms } = await fetchDataForEndless();
                setCurrentTitle(title);
                setCurrentContent(content);
                setCurrentRelatedTerms(relatedTerms);
            } catch (error) {
                console.error('Error fetching data for Endless:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleClick = async (word: string) => {
        onHighlightClick(word);
        setLoading(true);

        try {
            const newContent = await getDefinition(word);
            const newRelatedTerms = await getRelatedTerms(word);
            setCurrentTitle(word);
            setCurrentContent(newContent.content || ''); 
            setCurrentRelatedTerms(newRelatedTerms.links || []); 
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
                <div className="fixed top-16 right-0 p-4 flex justify-end">
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