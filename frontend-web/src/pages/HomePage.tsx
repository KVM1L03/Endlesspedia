import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/game/Button.tsx';
import { FaTiktok } from 'react-icons/fa';

function HomePage() {
    return (
        <div className='bg-[#ffedd9] flex flex-col mx-8 my-4 rounded-xl'>
            <section className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-col'>
                    <h1 className="text-4xl font-bold font-robotoMono m-6">Dive into a world of knowledge & fun!</h1>
                    <p className="text-xl font-robotoMono m-8">Start your adventure today !</p>
                    <p className="text-md text-wrap max-w-2xl font-robotoMono m-8">Endlesspedia is your gateway to endless learning and entertainment. Explore a variety of topics, challenge yourself with exciting game modes, and expand your knowledge in a fun and engaging way!
                    <Button color='#ff8f12' text='Follow us on TikTok!' textColor='black' className='self-start my-8 flex items-center' icon={<FaTiktok />}/></p>
                </div>
                <div className='flex'>
                    <img src="https://i.ibb.co/bjMKV8nv/illustration.png" alt='Superhero' className='max-w-full h-auto'/>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center w-full mt-8'>
                <h2 className="text-3xl font-bold font-robotoMono m-6">Ready to Choose Your Game?</h2>
                <p className="text-lg font-robotoMono m-4">Select from a variety of exciting game modes and start playing now!</p>
                <Link to="/choose-game">
                    <Button color='#ff8f12' text='Choose Game' textColor='black' className='m-4'/>
                </Link>
            </section>
        </div>
    );
}

export default HomePage;