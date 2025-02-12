import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import ChoseGamePage from '../pages/ChoseGamePage.tsx';
import Endless from '../pages/game-modes/Endless.tsx';
import { fetchDataForD2D } from '../api/dataFetcherD2D.ts';
import Header from './Header.tsx';
import Footer from '../components/Footer.tsx';
import DefToDef from '../pages/game-modes/DefToDef.tsx';



const Navigation = () => {
    const [defToDefData, setDefToDefData] = useState<{ title: string; content: string; relatedTerms: string[] } | null>(null);

    const initialTerm = 'Australia';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const d2dData = await fetchDataForD2D({ term: initialTerm });
                setDefToDefData(d2dData);
            } catch (error) {
            }
        };

        fetchData();
    }, []);

    const defaultDefToDefData = {
        title: 'DefToDef Mode',
        content: 'Choose path from one to another term or choose from most popular.',
        relatedTerms: ['path'],
    };

    return (
        <div className="bg-white min-h-screen font-sans flex flex-col">
            <Header />
            <div className="flex-1 pt-20">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/choose-game" element={<ChoseGamePage />} />
                    <Route
                        path="/endless"
                        element={
                            <Endless />
                        }
                    />
                    <Route
                        path="/def2def"
                        element={
                            <DefToDef
                                title={defToDefData?.title || defaultDefToDefData.title}
                                content={defToDefData?.content || defaultDefToDefData.content}
                                relatedTerms={defToDefData?.relatedTerms || defaultDefToDefData.relatedTerms}
                            />
                        }
                    />
                    <Route path="*" element={<HomePage />} /> 
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default Navigation;