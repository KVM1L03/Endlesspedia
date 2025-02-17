import React from 'react';

interface TextBoxProps {
    title: string;
    content: string;
    relatedTerms: string[];
    handleClick: (word: string) => Promise<void>;
}

const TextBox: React.FC<TextBoxProps> = ({ title, content, relatedTerms, handleClick }) => {
    const getHighlightedText = (text: string, highlight: string[] = []) => {
        const regex = new RegExp(`\\b(${highlight.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            part && highlight.some(term => term.toLowerCase() === part.toLowerCase()) ? (
                <span
                    key={index}
                    className="text-blue-500 font-bold cursor-pointer"
                    onClick={() => handleClick(part)}
                >
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    const renderSections = (text: string) => {
        const sections = text.split('\n\n\n').filter(section => section.trim() !== '');
        return sections.map((section, index) => {
            const isMainTitle = section.startsWith('== ') && section.endsWith(' ==');
            const isSubTitle = section.startsWith('=== ') && section.endsWith(' ===');
            const isSubSubTitle = section.startsWith('==== ') && section.endsWith(' ====');
            const content = section.replace(/==+ /g, '').replace(/ ==+/g, '');

            let className = 'text-base mt-2';
            if (isMainTitle) {
                className = 'text-2xl font-bold mt-4';
            } else if (isSubTitle) {
                className = 'text-xl font-bold mt-3';
            } else if (isSubSubTitle) {
                className = 'text-lg font-bold mt-2.5';
            }

            return (
                <div key={index} className={className}>
                    {getHighlightedText(content.trim(), relatedTerms)}
                </div>
            );
        });
    };

    const defaultContent = "No content available.";

    return (
        <div className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 bg-white text-black mx-auto p-6 md:p-8 lg:p-4 overflow-hidden lg:mx-2">
            {title && (
                <div className="text-xl md:text-2xl font-bold text-center font-robotoMono mb-4">
                    {title}
                </div>
            )}
            {content ? (
                <div className="text-sm font-robotoMono text-justify leading-relaxed break-words overflow-x-hidden">
                    {renderSections(content)}
                </div>
            ) : (
                <div className="text-sm font-robotoMono">
                    {defaultContent}
                </div>
            )}
        </div>
    );
};

export default TextBox;