import { getRandomDefinition, getRelatedTerms } from './definitionsAPI.ts';

export const fetchDataForEndless = async () => {
    try {
        const randomDefinition = await getRandomDefinition();
        const relatedTermsResponse = await getRelatedTerms(randomDefinition.title);
        const relatedTerms = relatedTermsResponse.links || []; 
        return {
            title: randomDefinition.title,
            content: randomDefinition.content,
            relatedTerms: relatedTerms, 
        };
    } catch (error) {
        console.error('Error fetching data for Endless:', error);
        throw error;
    }
};