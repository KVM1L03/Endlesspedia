import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const CustomCard: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-64 h-96 flex flex-col">
            <img src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
            <div className="p-4 font-robotoMono flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 overflow-hidden text-ellipsis">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CustomCard;