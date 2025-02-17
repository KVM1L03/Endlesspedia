import { getDefinition, getRelatedTerms } from '../definitionsAPI.ts';

export const fetchDataForD2D = async ({ term }) => {
    try {
        const definition = await getDefinition(term);
        const relatedTermsResponse = await getRelatedTerms(definition.title);
        const relatedTerms = relatedTermsResponse.links || []; 
        return {
            title: definition.title,
            content: definition.content,
            relatedTerms: relatedTerms,
        };
    } catch (error) {
        console.error('Error fetching data for D2D:', error);
        throw error;
    }
};