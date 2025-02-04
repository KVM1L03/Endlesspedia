import axios from 'axios';

export const getDefinition = async (term: string) => {
    const response = await axios.get(`http://127.0.0.1:5000/search?term=${term}`);
    return response.data;
};

export const getRandomDefinition = async () => {
    const response = await axios.get('http://127.0.0.1:5000/random');
    return response.data;
};

export const getRelatedTerms = async (term: string) => {
    const response = await axios.get(`http://127.0.0.1:5000/related?term=${term}`);
    return response.data;
};