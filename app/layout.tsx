import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Cutler Lawns | Commercial Property Preservation & Landscape Services',description:'Commercial-first landscaping, property preservation, winter response, estimate tools, and AI yard design studio for Cutler Lawns.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
