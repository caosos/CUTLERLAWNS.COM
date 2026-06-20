import { mkdir, writeFile } from 'fs/promises';import path from 'path';
export async function saveUpload(file:File){const bytes=Buffer.from(await file.arrayBuffer());const dir=path.join(process.cwd(),'public','uploads');await mkdir(dir,{recursive:true});const safe=`${Date.now()}-${file.name.replace(/[^a-z0-9._-]/gi,'-')}`;await writeFile(path.join(dir,safe),bytes);return `/uploads/${safe}`;}
