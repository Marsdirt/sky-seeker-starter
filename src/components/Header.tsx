import { Plane } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Plane className="h-10 w-10 text-primary group-hover:animate-pulse" />
          <h1 className="text-3xl font-headline font-bold text-primary">
            Sky-Seeker TEST
          </h1>
        </Link>
      </div>
    </header>
  );
}
