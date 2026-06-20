export type DesignRequest={imageUrl?:string;area:string;products:string[];style:string;budget:string;projectType:string;notes?:string};
export function buildDesignPrompt(input:DesignRequest){return `Use the uploaded property photo as the base scene. Preserve the house/building, camera angle, driveway, sky, and overall composition. Improve only the ${input.area||'landscape bed / yard zone'} for a ${input.projectType} project. Style: ${input.style}. Budget level: ${input.budget}. Include these selected plants/products as visual guidance: ${input.products.join(', ')||'professionally appropriate Arkansas landscape materials'}. Avoid inventing a different house. Produce realistic curb appeal for Cutler Lawns. Notes: ${input.notes||'none'}.`;}
export async function generateDesignConcept(input:DesignRequest){
 const prompt=buildDesignPrompt(input);
 if(!process.env.AI_PROVIDER || process.env.AI_PROVIDER==='mock') return {mode:'mock',prompt,concepts:['/images/ai/mock-concept-1.svg','/images/ai/mock-concept-2.svg','/images/ai/mock-concept-3.svg']};
 return {mode:'provider-ready',prompt,concepts:[],message:'Connect provider implementation in lib/ai.ts using server-side keys only.'};
}
