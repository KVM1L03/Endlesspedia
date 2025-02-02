import React, { useState } from 'react';
import { getDefinitions, getRelatedTerms } from '../../api/definitionsAPI.ts';
import TextBox from '../../components/game/TextBox.tsx';
import Timer from '../../components/game/Timer.tsx';
import SideBar from '../../components/game/SideBar.tsx';

interface EndlessProps {
    title: string;
    content: string;
    relatedTerms: string[];
    onHighlightClick: (word: string) => void;
}

const Endless: React.FC<EndlessProps> = ({ title, content, relatedTerms, onHighlightClick }) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);
    const [currentContent, setCurrentContent] = useState<string>(content);
    const [currentRelatedTerms, setCurrentRelatedTerms] = useState<string[]>(relatedTerms);

    const handleClick = async (word: string) => {
        onHighlightClick(word);

        try {
            const newContent = await getDefinitions(word);
            const newRelatedTerms = await getRelatedTerms(word);
            setCurrentTitle(word);
            setCurrentContent(newContent);
            setCurrentRelatedTerms(newRelatedTerms);
        } catch (error) {
            console.error('Error fetching new definition:', error);
        }
    };

    const buttons = [
        { text: 'Level 1: The Beginning (100 terms)', color: '#ff8f12', textColor: 'black', onClick: () => console.log('Level 1 clicked') },
        { text: 'Level 2: Into the forest (500 terms)', color: '#ffedd9', textColor: 'black', onClick: () => console.log('Level 2 clicked') },
        { text: 'Level 3: Mountain Climb (1000+ terms)', color: '#d3d3d3', textColor: 'black', onClick: () => console.log('Level 3 clicked') },
    ];

    return (
        <div className="bg-white text-black min-h-screen flex">
            <SideBar title="Achievements" buttons={buttons} />
            <div className="w-3/4 flex flex-col">
                <div className="flex justify-end p-4">
                    <Timer time="00:00" />
                </div>
                <TextBox
                    title={currentTitle}
                    content={currentContent}
                    relatedTerms={currentRelatedTerms}
                    onHighlightClick={onHighlightClick}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Endless;