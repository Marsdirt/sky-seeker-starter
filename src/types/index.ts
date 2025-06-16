
export interface AircraftListing {
  id: string;
  brand: string;
  model: string;
  type: string;
  price: number;
  location: string;
  description: string;
  imageUrl: string;
  source: 'Barnstormers' | 'Trade-a-Plane' | 'Controller' | 'Facebook Marketplace' | 'Craigslist' | 'Other';
  listingUrl: string;
  isExternal: boolean; // True if opens in new tab (FB, Craigslist)
  userInteraction?: 'liked' | 'disliked' | null;
  dataAiHint?: string;
}

export interface SearchFilters {
  brand: string;
  model: string;
  type: string;
  minPrice: string; // string to handle empty input
  maxPrice: string; // string to handle empty input
  location: string;
}

export interface UserInteraction {
  listingId: string;
  interactionType: 'liked' | 'disliked'; // Ensure this line is correct
}
