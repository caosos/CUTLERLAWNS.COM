import {NextResponse} from 'next/server';import {getNextDesignQuestion} from '@/lib/ai/designConsultant';
export async function POST(req:Request){const body=await req.json();return NextResponse.json(getNextDesignQuestion(body.session||body,body.messages||body.conversationMessages||[]));}
