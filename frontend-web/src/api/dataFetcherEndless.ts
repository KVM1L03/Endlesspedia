import { getRandomDefinition, getRelatedTerms } from './definitionsAPI.ts';

export const fetchDataForEndless = async () => {
    try {
        const randomDefinition = await getRandomDefinition();
        const relatedTerms = await getRelatedTerms(randomDefinition.title);
        console.log('Related Terms:', relatedTerms);
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