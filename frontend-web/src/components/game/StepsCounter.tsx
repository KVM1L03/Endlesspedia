import React from 'react';

interface StepsCounterProps {
    steps: number;
}

const StepsCounter: React.FC<StepsCounterProps> = ({ steps }) => {
    return (
        <div className="absolute top-4 left-4 bg-[#ff8f12] text-black border-2 border-black shadow-lg shadow-black rounded-full p-4 flex items-center justify-center font-robotoMono">
            Steps: {steps}
        </div>
    );
};

export default StepsCounter;