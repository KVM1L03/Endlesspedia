import React from 'react';
import Timer from '../../game/Timer.tsx';
import StepsCounter from '../../game/StepsCounter.tsx';

interface GameInfoProps {
    time: string;
    steps: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ time, steps }) => {
    return (
        <div className="flex flex-row space-x-2 md:space-x-4">
            <StepsCounter steps={steps} />
            <Timer time={time} />
        </div>
    );
};

export default GameInfo;