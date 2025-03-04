import React from 'react';

interface Player {
    name: string;
    score: number;
}

interface LeaderBoardProps {
    players: Player[];
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ players }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 font-robotoMono">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Player</th>
                        <th className="py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{player.name}</td>
                            <td className="border px-4 py-2">{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderBoard;