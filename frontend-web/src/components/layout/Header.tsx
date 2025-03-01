import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button.tsx';

const Header: React.FC = () => {
    return (
        <header className="bg-white p-2 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-10">
            <div className="flex items-center space-x-2 text-black">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo' className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16"/>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-robotoMono">Endlesspedia</h1>
            </div>
            <nav className="flex flex-row space-x-1 sm:space-x-2 md:space-x-4">
                <Link to="/" className="no-underline w-full md:w-auto">
                    <Button text="Home" color="white" textColor="black" className="w-full md:w-auto text-center text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1 sm:px-2 md:px-4" />
                </Link>
                <Link to="/choose-game" className="no-underline w-full md:w-auto">
                    <Button text="Gameplay" color="#ff8f12" textColor="black" className="w-full md:w-auto text-center text-xs sm:text-sm md:text-base py-1 sm:py-2 px-1 sm:px-2 md:px-4" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;