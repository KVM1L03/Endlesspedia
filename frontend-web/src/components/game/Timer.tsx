import React from 'react';

interface TimerProps {
    time: string;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
    return (
        <div className="bg-[#ff8f12] m-2 text-black border-2 border-black shadow-lg shadow-black rounded-full p-4 flex items-center justify-center font-robotoMono">
            Timer: {time}
        </div>
    );
};

export default Timer;