
import type { Metadata } from 'next';
import './globals.css'; // Keep globals for basic styling if any

export const metadata: Metadata = {
  title: 'Sky-Seeker Test',
  description: 'Testing deployment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
