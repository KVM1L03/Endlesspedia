import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/game/Button.tsx';

function ChoseGamePage() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center pt-8">
            <div className='bg-[#ffedd9] w-11/12 md:w-3/4 p-8 md:p-16 rounded-xl shadow-lg text-center font-robotoMono mb-8'>
                <h1 className='text-lg md:text-xl font-semibold'>Get ready for an adventure of endless possibilities!</h1>
                <p className='mt-4 md:mt-8 text-md md:text-lg'>Choose your game mode:</p>
            </div>
            <div className='bg-white w-11/12 md:w-1/2 flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4'>
                <Link to="/endless" className="w-full md:w-auto flex justify-center">
                    <Button color='#ff8f12' text='Endless' textColor='black' className="w-full md:w-auto text-center" />
                </Link>
                <Link to="/def2def" className="w-full md:w-auto flex justify-center">
                    <Button color='#ff8f12' text='Def2Def' textColor='black' className="w-full md:w-auto text-center" />
                </Link>
            </div>
        </div>
    );
}

export default ChoseGamePage;