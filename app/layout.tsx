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
        {children}
      </body>
    </html>
  );
}