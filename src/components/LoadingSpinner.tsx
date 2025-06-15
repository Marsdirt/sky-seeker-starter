import { Loader2 } from 'lucide-react';

export function LoadingSpinner({ size = 24 }: { size?: number }) {
  return (
    <div className="flex justify-center items-center py-10">
      <Loader2 className="h-10 w-10 text-primary animate-spin" style={{ width: size, height: size }} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
