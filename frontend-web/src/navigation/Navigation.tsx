import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import ChoseGamePage from '../pages/ChoseGamePage.tsx';
import Endless from '../pages/game-modes/Endless.tsx';
import { fetchDataForEndless } from '../api/dataFetcherEndless.ts';
import { fetchDataForD2D } from '../api/dataFetcherD2D.ts';
import Header from './Header.tsx';
import Footer from '../components/Footer.tsx';
import DefToDef from '../pages/game-modes/DefToDef.tsx';

const handleHighlightClick = (word: string) => {
    console.log(`Clicked on: ${word}`);
};

const Navigation = () => {
    const [endlessData, setEndlessData] = useState<{ title: string; content: string; relatedTerms: string[] } | null>(null);
    const [defToDefData, setDefToDefData] = useState<{ title: string; content: string; relatedTerms: string[] } | null>(null);

    const initialTerm = 'Australia';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endlessData = await fetchDataForEndless();
                setEndlessData(endlessData);
                console.log('Fetched Endless Data:', endlessData);

                const d2dData = await fetchDataForD2D({ term: initialTerm });
                setDefToDefData(d2dData);
                console.log('Fetched DefToDef Data:', d2dData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const defaultEndlessData = {
        title: 'Default Endless Title',
        content: 'This is default content for the Endless mode.',
        relatedTerms: ['default1', 'default2', 'default3'],
    };

    const defaultDefToDefData = {
        title: 'DefToDef Mode',
        content: 'Choose path from one to another term or choose from most popular.',
    };

    return (
        <div className="min-h-screen font-sans flex flex-col">
            <Header />
            <div className="flex-1 pt-20">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/choose-game" element={<ChoseGamePage />} />
                    <Route
                        path="/endless"
                        element={
                            <Endless
                                title={endlessData?.title || defaultEndlessData.title}
                                content={endlessData?.content || defaultEndlessData.content}
                                relatedTerms={endlessData?.relatedTerms || defaultEndlessData.relatedTerms}
                                onHighlightClick={handleHighlightClick}
                            />
                        }
                    />
                    <Route
                        path="/def2def"
                        element={
                            <DefToDef
                                title={defToDefData?.title || defaultDefToDefData.title}
                                content={defToDefData?.content || defaultDefToDefData.content}
                                relatedTerms={defToDefData?.relatedTerms || defaultDefToDefData.relatedTerms}
                                onHighlightClick={handleHighlightClick}
                            />
                        }
                    />
                    <Route path="/blitz" element={<div>Definition to Definition Blitz</div>} />
                    <Route path="/settings" element={<div>Settings Page</div>} />
                    <Route path="*" element={<HomePage />} /> 
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default Navigation;