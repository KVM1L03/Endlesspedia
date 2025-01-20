import React from 'react';
import { Typography, Box } from '@mui/material';

interface EndlessProps {
    text: string;
    highlightWords: string[];
    onHighlightClick: (word: string) => void;
}

const Endless: React.FC<EndlessProps> = ({ text, highlightWords, onHighlightClick }) => {
    const getHighlightedText = (text: string, highlight: string[]) => {
        const parts = text.split(new RegExp(`(${highlight.join('|')})`, 'gi'));
        return parts.map((part, index) =>
            highlight.includes(part.toLowerCase()) ? (
                <span
                    key={index}
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => onHighlightClick(part)}
                >
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                color: 'black',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
            }}
        >
            <Typography variant="h4" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {getHighlightedText(text, highlightWords)}
            </Typography>
        </Box>
    );
};

export default Endless;