import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.tsx';

function ChoseGamePage() {
    return (
        <div className="bg-[#ffedd9] flex flex-col mx-4 my-2 md:mx-8 md:my-4 rounded-xl">
            <section className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl md:text-4xl font-bold font-robotoMono m-4 md:m-6 text-center md:text-left">
                        Get ready for an adventure of endless possibilities!
                    </h1>
                    <p className="text-lg md:text-xl font-robotoMono m-4 md:m-8 text-center md:text-left">
                        Choose your game mode:
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mb-8 space-y-4 mx-8 md:space-y-0 md:space-x-4">
                        <Link to="/endless" className="w-full md:w-auto flex justify-center">
                            <Button color="#ff8f12" text="Endless" textColor="black" className="w-full md:w-auto text-center" />
                        </Link>
                        <Link to="/def2def" className="w-full md:w-auto flex justify-center">
                            <Button color="#ff8f12" text="Def2Def" textColor="black" className="w-full md:w-auto text-center" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-1/2">
                    <img src="https://i.ibb.co/xNrHSdD/obraz-2025-02-24-185108263.png" alt="UFO" className="max-w-full h-auto" />
                </div>
            </section>
        </div>
    );
}

export default ChoseGamePage;