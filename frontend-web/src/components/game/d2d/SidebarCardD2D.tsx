import React, { useState } from 'react';

interface SidebarCardProps {
    onSubmit: (fromTerm: string, toTerm: string) => void;
}

const SidebarCardD2D: React.FC<SidebarCardProps> = ({ onSubmit }) => {
    const [fromTerm, setFromTerm] = useState<string>('');
    const [toTerm, setToTerm] = useState<string>('');

    const handleSubmit = () => {
        onSubmit(fromTerm, toTerm);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 font-robotoMono">
            <h1 className='text-center font-bold text-sm md:text-lg mb-2 md:mb-4'>Choose your path</h1>
            <div className="mb-2 md:mb-4">
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1 md:mb-2" htmlFor="fromTerm">
                    From:
                </label>
                <input
                    id="fromTerm"
                    type="text"
                    value={fromTerm}
                    onChange={(e) => setFromTerm(e.target.value)}
                    className="block w-full p-1 md:p-2 text-gray-900 border border-gray-300 rounded-lg bg-[#e3e3e3] text-xs md:text-sm focus:ring-[#ff8f12] focus:border-[#ff8f12]"
                />
            </div>
            <div className="flex justify-center mb-2 md:mb-4">
                <span className="text-xl md:text-2xl">↓</span>
            </div>
            <div className="mb-2 md:mb-4">
                <label className="block text-gray-700 text-xs md:text-sm font-bold mb-1 md:mb-2" htmlFor="toTerm">
                    To:
                </label>
                <input
                    id="toTerm"
                    type="text"
                    value={toTerm}
                    onChange={(e) => setToTerm(e.target.value)}
                    className="block w-full p-1 md:p-2 text-gray-900 border border-gray-300 rounded-lg bg-[#e3e3e3] text-xs md:text-sm focus:ring-[#ff8f12] focus:border-[#ff8f12]"
                />
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleSubmit}
                    className="bg-[#ff8f12] text-black font-bold py-1 md:py-2 px-2 md:px-4 rounded-full shadow-md shadow-black transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default SidebarCardD2D;