import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/game/Button.tsx';

function ChoseGamePage() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center pt-8">
            <div className='bg-[#ffedd9] w-3/4 p-16 rounded-xl shadow-lg text-center font-robotoMono mb-8'>
                <h1 className='text-xl'>Get ready for an adventure of endless possibilities!</h1>
            </div>
            <div className='bg-white w-1/2 flex justify-center mb-8 space-x-4'>
                <Link to="/endless">
                    <Button color='#ff8f12' text='Endless' textColor='black' />
                </Link>
                <Link to="/def2def">
                    <Button color='#ff8f12' text='Def2Def' textColor='black' />
                </Link>
            </div>
            <div className='bg-[#d3d3d3] w-3/4 p-16 rounded-xl font-bold shadow-lg text-center font-robotoMono'>
                <h1 className='text-xl text-black mb-4'>Previous Games</h1>
                <div className='bg-[#fff] w-full p-4 rounded-xl font-bold shadow-lg text-center font-robotoMono mb-4 flex justify-between'>
                    <p className='text-xl text-black'>Endless</p>
                    <p>Score: 40 min</p>
                </div>
                <div className='bg-[#fff] w-full p-4 rounded-xl font-bold shadow-lg text-center font-robotoMono mb-4 flex justify-between'>
                    <p className='text-xl text-black'>Def2Def</p>
                    <p>Score: 12 s</p>
                </div>
                <div className='bg-[#fff] w-full p-4 rounded-xl font-bold shadow-lg text-center font-robotoMono flex justify-between'>
                    <p className='text-xl text-black'>Def2Def</p>
                    <p>Score: 12 s</p>
                </div>
            </div>
        </div>
    );
}

export default ChoseGamePage;