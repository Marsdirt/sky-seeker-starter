
import type { Metadata } from 'next';
import './globals.css'; // Keep this for basic styling if globals.css is present

export const metadata: Metadata = {
  title: 'Sky-Seeker Diagnostic',
  description: 'Testing srcDir configuration',
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
