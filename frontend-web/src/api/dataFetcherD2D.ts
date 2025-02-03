import { getDefinition, getRelatedTerms } from './definitionsAPI.ts';

export const fetchDataForD2D = async ({ term }) => {
    try {
        const definition = await getDefinition(term);
        const relatedTerms = await getRelatedTerms(definition.title);
        console.log('Related Terms:', relatedTerms);
        return {
            title: definition.title,
            content: definition.content,
            relatedTerms: relatedTerms,
        };
    } catch (error) {
        console.error('Error fetching data for Endless:', error);
        throw error;
    }
};
