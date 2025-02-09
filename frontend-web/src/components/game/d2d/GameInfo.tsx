import React from 'react';
import Timer from '../../game/Timer.tsx';
import StepsCounter from '../../game/StepsCounter.tsx';

interface GameInfoProps {
    time: string;
    steps: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ time, steps }) => {
    return (
        <div>
            <StepsCounter steps={steps} />
            <Timer time={time} />
        </div>
    );
};

export default GameInfo;