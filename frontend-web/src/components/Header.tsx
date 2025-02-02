import React from 'react';
import { FaGamepad } from 'react-icons/fa';
import Button from './game/Button.tsx';

const Header: React.FC = () => {
    return (
        <header className="bg-white p-4 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-10">
            <div className="flex items-center space-x-2 text-black">
                <FaGamepad className="text-2xl" />
                <h1 className="text-2xl font-bold font-robotoMono">Endlesspedia</h1>
            </div>
            <div className="flex space-x-4">
                <Button text="Home" color="white" textColor="black" onClick={() => console.log('Navigate to Home')} />
                <Button text="Gameplay" color="#ff8f12" textColor="black" onClick={() => console.log('Navigate to Gameplay')} />
                <Button text="Settings" color="white" textColor="black" onClick={() => console.log('Navigate to Settings')} />
            </div>
        </header>
    );
};

export default Header;