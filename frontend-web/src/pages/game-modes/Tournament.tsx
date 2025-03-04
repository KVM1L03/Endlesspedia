import React from 'react';
import Button from '../../components/common/Button.tsx';
import LeaderBoard from '../../components/game/tournament/LeaderBoard.tsx';

const Tournament: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="font-robotoMono text-3xl font-bold mb-4 text-center">Tournament</h1>
            <p className="font-robotoMono text-lg mb-8 text-center">Choose how many definitions you want to pass in the tournament</p>
            <div className="flex flex-row justify-center space-x-4 mb-8">
                <Button color="#ff8f12" textColor="black" text="5 Definitions" />
                <Button color="#ff8f12" textColor="black" text="10 Definitions" />
                <Button color="#ff8f12" textColor="black" text="15 Definitions" />
            </div>
            <div className="mt-8">
                <h2 className="font-robotoMono text-2xl font-bold mb-4 text-center">Leaderboard</h2>
                <LeaderBoard players={[{ name: 'Player 1', score: 5000 }, { name: 'Player 2', score: 4500 }]} />
            </div>
        </div>
    );
};

export default Tournament;