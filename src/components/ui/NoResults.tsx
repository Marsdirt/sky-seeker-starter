import { SearchX } from 'lucide-react';

interface NoResultsProps {
  message?: string;
}

export function NoResults({ message = "No aircraft listings found matching your criteria. Try adjusting your filters." }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 bg-card rounded-lg shadow-md">
      <SearchX className="h-16 w-16 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">No Results Found</h3>
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}
