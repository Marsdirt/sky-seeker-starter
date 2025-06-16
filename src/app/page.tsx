
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '../components/Footer.tsx'; // Corrected relative import for Footer
import { FilterPanel } from '../components/FilterPanel.tsx'; // Corrected relative import for FilterPanel
import { ListingsGrid } from '@/components/ListingsGrid';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { NoResults } from '@/components/NoResults';
import type { AircraftListing, SearchFilters, UserInteraction } from '@/types';
import { INITIAL_FILTERS, PLACEHOLDER_LISTINGS } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

// Simulated API call
const fetchListings = async (filters: SearchFilters): Promise<AircraftListing[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = PLACEHOLDER_LISTINGS.filter((listing) => {
        const brandMatch = !filters.brand || listing.brand.toLowerCase().includes(filters.brand.toLowerCase());
        const modelMatch = !filters.model || listing.model.toLowerCase().includes(filters.model.toLowerCase());
        const typeMatch = filters.type === 'All Types' || listing.type === filters.type;
        const minPriceMatch = !filters.minPrice || listing.price >= parseFloat(filters.minPrice);
        const maxPriceMatch = !filters.maxPrice || listing.price <= parseFloat(filters.maxPrice);
        const locationMatch = !filters.location || listing.location.toLowerCase().includes(filters.location.toLowerCase());
        return brandMatch && modelMatch && typeMatch && minPriceMatch && maxPriceMatch && locationMatch;
      });
      resolve(results);
    }, 1000);
  });
};


export default function HomePage() {
  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS);
  const [listings, setListings] = useState<AircraftListing[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Initial load of all placeholder listings
    handleSearch(INITIAL_FILTERS, false);
  }, []);


  const handleSearch = async (currentFilters: SearchFilters = filters, markSearched: boolean = true) => {
    setIsLoading(true);
    if(markSearched) setHasSearched(true);
    try {
      const fetchedListings = await fetchListings(currentFilters);
      // Preserve user interactions on existing listings if any were stored locally
      const updatedListings = fetchedListings.map(fl => {
        const existingListing = listings.find(l => l.id === fl.id);
        return {
          ...fl,
          userInteraction: existingListing ? existingListing.userInteraction : null,
        };
      });
      setListings(updatedListings);
    } catch (error) {
      console.error('Failed to fetch listings:', error);
      toast({ title: 'Error', description: 'Could not fetch listings.', variant: 'destructive' });
      setListings([]);
    }
    setIsLoading(false);
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const handleListingInteraction = (interaction: UserInteraction) => {
    // Update listing UI immediately for like/dislike visual feedback
    setListings(prevListings =>
      prevListings.map(l =>
        l.id === interaction.listingId
        ? { ...l, userInteraction: l.userInteraction === interaction.interactionType ? null : interaction.interactionType }
        : l
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onSearch={() => handleSearch()}
              isSearching={isLoading}
            />
          </div>
          <div className="lg:col-span-8 xl:col-span-9">
            {isLoading ? (
              <LoadingSpinner size={60} />
            ) : listings.length > 0 ? (
              <ListingsGrid listings={listings} onInteraction={handleListingInteraction} />
            ) : hasSearched ? (
              <NoResults />
            ) : (
               <NoResults message="Welcome to Sky-Seeker! Adjust filters and click search to find aircraft." />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

