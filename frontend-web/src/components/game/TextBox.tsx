import React, { useEffect, ReactNode } from 'react';

interface TextBoxProps {
    title: string;
    content: string;
    relatedTerms: string[];
    handleClick: (word: string) => Promise<void>;
    children?: ReactNode;
}

const TextBox: React.FC<TextBoxProps> = ({ title, content, relatedTerms, handleClick, children }) => {
    useEffect(() => {
        console.log('TextBox updated with title:', title);
        console.log('TextBox updated with content:', content);
        console.log('TextBox updated with relatedTerms:', relatedTerms);
    }, [title, content, relatedTerms]);

    const getHighlightedText = (text: string, highlight: string[]) => {
        const regex = new RegExp(`(${highlight.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            part && highlight.some(term => term.toLowerCase() === part.toLowerCase()) ? (
                <span
                    key={index}
                    onClick={() => handleClick(part)}
                    style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                >
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div className='p-8 my-4'>
            {children}
            <h1 className='text-center text-2xl my-2 font-robotoMono font-bold'>{title}</h1>
            {typeof content === 'string' ? (
                <div className="text-md font-robotoMono">
                    {getHighlightedText(content, relatedTerms)}
                </div>
            ) : (
                <div className="text-2xl font-bold text-center font-robotoMono">
                    Loading...
                </div>
            )}
        </div>
    );
};

export default TextBox;