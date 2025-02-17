import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
    // baseURL: 'https://o55yp7ezeg.execute-api.eu-central-1.amazonaws.com/dev',
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
});

export const getDefinition = async (term: string) => {
    const response = await axiosInstance.get(`/definition?term=${term}`);
    return response.data;
};

export const getRandomDefinition = async () => {
    const response = await axiosInstance.get('/random');
    return response.data;
};

export const getRelatedTerms = async (term: string) => {
    const response = await axiosInstance.get(`/related?term=${term}`);
    return response.data;
};

export const searchDefinitions = async (query: string) => {
    const response = await axiosInstance.get(`/search?query=${query}`);
    return response.data.search_terms;
};