import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harsh Aathavale - Senior Software Engineer',
  description: 'Portfolio and resume website for Harsh Aathavale, Senior Software Engineer focused on distributed systems, AI platforms, and cloud infrastructure.',
  metadataBase: new URL('https://www.aiharsh.com'),
  openGraph: {
    title: 'Harsh Aathavale - Senior Software Engineer',
    description: 'Distributed systems, production ML infrastructure, and full-stack AI applications.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-20 h-80 w-80 animate-floatSlow rounded-full bg-lime-500/25 blur-3xl" />
          <div className="absolute right-[-10rem] top-1/3 h-96 w-96 animate-floatReverse rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-floatSlow rounded-full bg-sky-500/20 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}