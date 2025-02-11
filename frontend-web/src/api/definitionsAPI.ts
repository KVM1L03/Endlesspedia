import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
    baseURL: 'https://o55yp7ezeg.execute-api.eu-central-1.amazonaws.com/dev',
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
});

export const getDefinition = async (term: string) => {
    const response = await axiosInstance.get(`/search?term=${term}`);
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