import {NextResponse} from 'next/server';import {generateConceptImages} from '@/lib/ai/imageProvider';import {buildDesignBrief} from '@/lib/ai/designBrief';
export async function POST(req:Request){const body=await req.json();const brief=body.designBrief||buildDesignBrief(body,body.conversationMessages||[]);return NextResponse.json(await generateConceptImages(brief,body.count||1));}
