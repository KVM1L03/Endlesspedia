import React from 'react';
import Timer from './Timer.tsx';
import StepsCounter from './StepsCounter.tsx';

interface GameInfoProps {
    time: string;
    steps: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ time, steps }) => {
    return (
        <div className="fixed top-20 right-4 p-4 flex justify-end space-x-4">
            <StepsCounter steps={steps} />
            <Timer time={time} />
        </div>
    );
};

export default GameInfo;