import React, { useState } from 'react';
import { getDefinitions, getRelatedTerms } from '../../api/definitionsAPI.ts';
import TextBox from '../../components/game/TextBox.tsx';

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

    return (
        <div className="bg-white text-black min-h-screen flex">
            <div className="w-1/4 bg-gray-100 p-4">
                {/* You can add other components or content here */}
            </div>
            <TextBox
                title={currentTitle}
                content={currentContent}
                relatedTerms={currentRelatedTerms}
                onHighlightClick={onHighlightClick}
                handleClick={handleClick}
            />
        </div>
    );
};

export default Endless;