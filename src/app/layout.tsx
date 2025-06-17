
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure this is correctly importing from src/app/globals.css
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sky-Seeker',
  description: 'Find your next aircraft with Sky-Seeker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Google Font links are handled by next/font/google */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
