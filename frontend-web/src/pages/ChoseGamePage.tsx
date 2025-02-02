import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.tsx';

function ChoseGamePage() {
    return (
        <div className="bg-[#ffedd9] min-h-screen flex flex-col items-center pt-8">
            <h1 className="text-3xl font-bold font-robotoMono mb-8">Choose Game Mode</h1>
            <div className="flex flex-wrap justify-center">
                <Link to="/endless" className="no-underline">
                    <Card
                        image="https://i.ibb.co/7y5NTSy/1.png"
                        title="Infinite Definition Mode"
                        description="Click from one definition to another by clicking references within definitions."
                    />
                </Link>
                <Link to="/def2def" className="no-underline">
                    <Card
                        image="https://i.ibb.co/84H3YCC/2.png"
                        title="From Definition to Definition"
                        description="Navigate from one definition to another in a structured manner."
                    />
                </Link>
                <Link to="/blitz" className="no-underline">
                    <Card
                        image="https://i.ibb.co/ZdNjtvY/3.png"
                        title="Definition to Definition Blitz"
                        description="Quickly move from one definition to another in a blitz mode."
                    />
                </Link>
            </div>
        </div>
    );
}

export default ChoseGamePage;