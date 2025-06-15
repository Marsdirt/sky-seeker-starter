import type { AircraftListing, UserInteraction } from '@/types';
import { ListingCard } from './ListingCard';

interface ListingsGridProps {
  listings: AircraftListing[];
  onInteraction: (interaction: UserInteraction) => void;
}

export function ListingsGrid({ listings, onInteraction }: ListingsGridProps) {
  if (listings.length === 0) {
    return null; // NoResults component will be handled by parent
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} onInteraction={onInteraction} />
      ))}
    </div>
  );
}
