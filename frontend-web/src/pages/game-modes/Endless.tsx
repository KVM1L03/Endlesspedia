    import React, { useState, useEffect, Suspense } from 'react';
    import { getDefinition, getRelatedTerms } from '../../api/definitionsAPI.ts';
    import { fetchDataForEndless } from '../../api/fetchers/dataFetcherEndless.ts';
    import Timer from '../../components/game/Timer.tsx';
    import SideBar from '../../components/game/SideBar.tsx';
    import SkeletonLoader from '../../components/animation/SkeletonLoader.tsx';
    import Button from '../../components/common/Button.tsx';
    
    const TextBox = React.lazy(() => import('../../components/game/TextBox.tsx'));
    
    interface EndlessProps {
        onHighlightClick?: (word: string) => void;
    }
    
    const Endless: React.FC<EndlessProps> = ({ onHighlightClick }) => {
        const [currentTitle, setCurrentTitle] = useState<string>('Loading...');
        const [currentContent, setCurrentContent] = useState<string>('Loading...');
        const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [time, setTime] = useState<number>(0);
    
        useEffect(() => {
            const timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
            return () => clearInterval(timer);
        }, []);
    
        const formatTime = (time: number) => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };
    
        useEffect(() => {
            let isMounted = true;
    
            const fetchData = async () => {
                try {
                    const { title, content, relatedTerms } = await fetchDataForEndless();
                    if (isMounted) {
                        setCurrentTitle(title);
                        setCurrentContent(content);
                        setCurrentRelatedTerms(relatedTerms);
                    }
                } catch (error) {
                    console.error('Error fetching data for Endless:', error);
                } finally {
                    if (isMounted) {
                        setLoading(false);
                    }
                }
            };
    
            fetchData();
    
            return () => {
                isMounted = false;
            };
        }, []);
    
        const handleClick = async (word: string) => {
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
    
        const handleReload = async () => {
            setLoading(true);
    
            try {
                const { title, content, relatedTerms } = await fetchDataForEndless();
                setCurrentTitle(title);
                setCurrentContent(content);
                setCurrentRelatedTerms(relatedTerms);
            } catch (error) {
                console.error('Error fetching new random definition:', error);
            } finally {
                setLoading(false);
            }
        };
    
        const buttons = [
            { text: 'Level 1: The Beginning (100 terms)', color: '#ff8f12', textColor: 'black' },
            { text: 'Level 2: Into the forest (500 terms)', color: '#ffedd9', textColor: 'black' },
            { text: 'Level 3: Mountain Climb (1000+ terms)', color: '#d3d3d3', textColor: 'black' },
        ];
    
        return (
            <div className="bg-white text-black min-h-screen flex flex-col md:flex-row">
                <SideBar title="Achievements" buttons={buttons}>
                    <div className="mt-8 flex justify-center">
                        <Button
                            color="#ff8f12"
                            text="Reload Definition"
                            textColor="black"
                            onClick={handleReload}
                        />
                    </div>
                </SideBar>
                <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col relative">
                    <div className="fixed top-16 right-0 p-4 flex justify-end space-x-4">
                        <Timer time={formatTime(time)} />
                    </div>
                    <div className="flex-1 overflow-auto mx-8 mt-4 md:px-8">
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