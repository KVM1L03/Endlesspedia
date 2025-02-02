import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import ChoseGamePage from '../pages/ChoseGamePage.tsx';
import Endless from '../pages/game-modes/Endless.tsx';
import { fetchDataForEndless } from '../api/dataFetcherEndless.ts';
import Header from './Header.tsx';
import Footer from '../components/Footer.tsx';

const handleHighlightClick = (word: string) => {
    console.log(`Clicked on: ${word}`);
};

const Navigation = () => {
    const [endlessData, setEndlessData] = useState<{ title: string; content: string; relatedTerms: string[] } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDataForEndless();
                setEndlessData(data);
            } catch (error) {
                console.error('Error fetching data for Endless:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen font-sans flex flex-col">
            <Header />
            <div className="flex-1 pt-20">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/choose-game" element={<ChoseGamePage />} />
                    {endlessData && (
                        <Route
                            path="/endless"
                            element={
                                <Endless
                                    title={endlessData.title}
                                    content={endlessData.content}
                                    relatedTerms={endlessData.relatedTerms}
                                    onHighlightClick={handleHighlightClick}
                                />
                            }
                        />
                    )}
                    <Route path="/def2def" element={<div>From Definition to Definition</div>} />
                    <Route path="/blitz" element={<div>Definition to Definition Blitz</div>} />
                    <Route path="/settings" element={<div>Settings Page</div>} />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};

export default Navigation;