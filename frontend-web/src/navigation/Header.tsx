import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/game/Button.tsx';

const Header: React.FC = () => {
    return (
        <header className="bg-white p-2 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-10">
            <div className="flex items-center space-x-2 text-black">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo' className="h-16 w-16"/>
                <h1 className="text-2xl font-bold font-robotoMono">Endlesspedia</h1>
            </div>
            <nav className="flex space-x-4">
                <Link to="/" className="no-underline">
                    <Button text="Home" color="white" textColor="black" />
                </Link>
                <Link to="/choose-game" className="no-underline">
                    <Button text="Gameplay" color="#ff8f12" textColor="black" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;