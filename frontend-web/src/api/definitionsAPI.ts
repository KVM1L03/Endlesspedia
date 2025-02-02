import axios from 'axios';

export const getDefinitions = async (term: string) => {
    const response = await axios.get(`http://127.0.0.1:5000/search?term=${term}`);
    return response.data.content;
};

export const getRandomDefinition = async () => {
    const response = await axios.get('http://127.0.0.1:5000/random');
    return response.data;
};

export const getRelatedTerms = async (term: string) => {
    const response = await axios.get(`http://127.0.0.1:5000/related?term=${term}`);
    return response.data.related_terms;
};