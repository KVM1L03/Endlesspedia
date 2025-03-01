import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.tsx';
import { FaTiktok } from 'react-icons/fa';

function HomePage() {
    return (
        <div className='bg-[#ffedd9] flex flex-col mx-4 my-2 md:mx-8 md:my-4 rounded-xl'>
            <section className='flex flex-col md:flex-row items-center justify-between w-full'>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className="text-3xl md:text-4xl font-bold font-robotoMono m-4 md:m-6 text-center md:text-left">Dive into a world of knowledge & fun!</h1>
                    <p className="text-lg md:text-xl font-robotoMono m-4 md:m-8 text-center md:text-left">Start your adventure today!</p>
                    <p className="text-sm md:text-md text-wrap max-w-full md:max-w-2xl font-robotoMono m-4 md:m-8 text-center md:text-left">
                        Endlesspedia is your gateway to endless learning and entertainment. Explore a variety of topics, challenge yourself with exciting game modes, and expand your knowledge in a fun and engaging way!
                    </p>
                    <Button color='#ff8f12' text='Follow us on TikTok!' textColor='black' className='self-center md:self-start my-4 md:my-8 mx-4 md:mx-12 flex items-center' icon={<FaTiktok />} href='https://www.tiktok.com/@endlesspedia' />
                </div>
                <div className='flex justify-center md:justify-end'>
                    <img src="https://i.ibb.co/bjMKV8nv/illustration.png" alt='Superhero' className='max-w-full h-auto'/>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center w-full mt-8'>
                <h2 className="text-2xl md:text-3xl font-bold font-robotoMono m-4 md:m-6">Ready to Choose Your Game?</h2>
                <p className="text-md md:text-lg font-robotoMono m-4">Select from a variety of exciting game modes and start playing now!</p>
                <Link to="/choose-game">
                    <Button color='#ff8f12' text='Choose Game' textColor='black' className='m-4'/>
                </Link>
            </section>
            
        </div>
    );
}

export default HomePage;