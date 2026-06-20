import {NextResponse} from 'next/server';import {buildDesignBrief} from '@/lib/ai/designBrief';
export async function POST(req:Request){const body=await req.json();return NextResponse.json({mode:process.env.AI_PROVIDER||'mock',brief:buildDesignBrief(body.session||body,body.messages||body.conversationMessages||[])});}
