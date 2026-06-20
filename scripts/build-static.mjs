import { cp, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await cp('src', 'dist/src', { recursive: true });
if (existsSync('public')) await cp('public', 'dist', { recursive: true });
console.log('Static site copied to dist/');
