import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure this is correctly importing from src/app/globals.css
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sky-Seeker | Airplane Classifieds & Aircraft Marketplace',
  description:
    'Browse airplane classifieds, buy and sell aircraft, and find your next plane on Sky-Seeker. The best place for general aviation listings, private planes, and more.',
  keywords: [
    'airplane classifieds',
    'aircraft for sale',
    'buy airplane',
    'sell airplane',
    'general aviation',
    'private planes',
    'aircraft marketplace',
    'used airplanes',
    'Cessna',
    'Piper',
    'Beechcraft',
    'Mooney',
    'Bush Plane',
  ],
  openGraph: {
    title: 'Sky-Seeker | Airplane Classifieds & Aircraft Marketplace',
    description:
      'Browse airplane classifieds, buy and sell aircraft, and find your next plane on Sky-Seeker. The best place for general aviation listings, private planes, and more.',
    url: 'https://your-domain.com', // Replace with your actual domain
    type: 'website',
    images: [
      {
        url: '/public/prop.png',
        width: 800,
        height: 600,
        alt: 'Sky-Seeker Airplane Classifieds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky-Seeker | Airplane Classifieds & Aircraft Marketplace',
    description:
      'Browse airplane classifieds, buy and sell aircraft, and find your next plane on Sky-Seeker.',
    images: ['/public/prop.png'],
  },
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
