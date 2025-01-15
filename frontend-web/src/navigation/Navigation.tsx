import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import ChoseGamePage from '../pages/ChoseGamePage.tsx';
import { IoLogoGameControllerB } from 'react-icons/io';

const Navigation = () => {
    return (
        <div className="bg-gray-100 min-h-screen font-sans flex">
            {/* Sidebar */}
            <aside className="w-16 bg-white shadow-md flex flex-col items-center py-4 space-y-6">
                <Link to="/" className="p-2 text-blue-600 hover:text-blue-500">
                </Link>
                <Link to="/choose-game" className="p-2 text-blue-600 hover:text-blue-500">
                <IoLogoGameControllerB />
                </Link>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/choose-game" element={<ChoseGamePage />} />
                </Routes>
            </div>
        </div>
    );
};

export default Navigation;