import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { getDefinitions } from '../../api/definitionsAPI.ts';

interface EndlessProps {
    highlightWords: string[];
    onHighlightClick: (word: string) => void;
}

const Endless: React.FC<EndlessProps> = ({ highlightWords, onHighlightClick }) => {
    const [definition, setDefinition] = useState<string | null>(null);

    useEffect(() => {
        const fetchDefinition = async () => {
            try {
                const definitions = await getDefinitions("Python (programming language)");
                setDefinition(definitions);
            } catch (error) {
                console.error('Error fetching definitions:', error);
            }
        };

        fetchDefinition();
    }, []);

    const handleClick = async (word: string) => {
        onHighlightClick(word);

        try {
            const definitions = await getDefinitions(word);
            setDefinition(definitions); 
        } catch (error) {
            console.error('Error fetching definitions:', error);
        }
    };

    const getHighlightedText = (text: string, highlight: string[]) => {
        const parts = text.split(new RegExp(`(${highlight.join('|')})`, 'gi'));
        return parts.map((part, index) =>
            highlight.includes(part.toLowerCase()) ? (
                <span
                    key={index}
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => handleClick(part)}
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
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
            }}
        >
            {definition ? (
                <Typography variant="caption" component="div" sx={{ fontWeight: 'bold' }}>
                    {getHighlightedText(definition, highlightWords)}
                </Typography>
            ) : (
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Loading...
                </Typography>
            )}
        </Box>
    );
};

export default Endless;