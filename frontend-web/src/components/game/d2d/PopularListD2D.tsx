import React from 'react';
import Button from '../Button.tsx';

interface PopularListD2DProps {
    popularLinks: { from: string; to: string }[];
    onLinkClick: (from: string, to: string) => void;
}

const PopularListD2D: React.FC<PopularListD2DProps> = ({ popularLinks, onLinkClick }) => {
    const medals = ['🥇', '🥈', '🥉'];

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 font-robotoMono">
            <h2 className="text-xl text-center font-bold mb-4">Most popular paths</h2>
            <ul className="list-disc pl-5 my-4">
                {popularLinks.slice(0, 5).map((link, index) => (
                    <div className='my-4'>
                        <Button
                            text={`${index < 3 ? medals[index] + ' ' : ''}${link.from} → ${link.to}`}
                            color="#ffedd9"
                            textColor="blue-500"
                            onClick={() => onLinkClick(link.from, link.to)}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default PopularListD2D;