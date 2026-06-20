import {NextResponse} from 'next/server';import {saveUpload} from '@/lib/storage';
export async function POST(req:Request){const form=await req.formData();const file=form.get('file');if(!(file instanceof File))return NextResponse.json({error:'Missing file'},{status:400});const url=await saveUpload(file);return NextResponse.json({url});}
