import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage.tsx';
import ChoseGamePage from '../../pages/ChoseGamePage.tsx';
import Endless from '../../pages/game-modes/Endless.tsx';
import { fetchDataForD2D } from '../../api/fetchers/dataFetcherD2D.ts';
import Header from './Header.tsx';
import Footer from '../layout/Footer.tsx';
import DefToDef from '../../pages/game-modes/DefToDef.tsx';
import PrivacyPolicy from '../../pages/PrivacyPolicy.tsx';
import Tournament from '../../pages/game-modes/Tournament.tsx';

const Navigation = () => {
    const [defToDefData, setDefToDefData] = useState<{ title: string; content: string; relatedTerms: string[] } | null>(null);

    const initialTerm = 'Australia';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const d2dData = await fetchDataForD2D({ term: initialTerm });
                setDefToDefData(d2dData);
            } catch (error) {
                console.error('Error fetching data for DefToDef:', error);
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
                    <Route path="/endless" element={<Endless />} />
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
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/tournament" element={<Tournament />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default Navigation;