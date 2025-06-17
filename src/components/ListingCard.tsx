
'use client';

import type { AircraftListing, UserInteraction } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, MapPin, Tag, ThumbsDown, ThumbsUp, Info } from 'lucide-react';

interface ListingCardProps {
  listing: AircraftListing;
  onInteraction: (interaction: UserInteraction) => void;
}

export function ListingCard({ listing, onInteraction }: ListingCardProps) {
  const handleInteraction = (type: 'liked' | 'disliked') => {
    onInteraction({ listingId: listing.id, interactionType: type });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Diagnostic Placeholder for Image Area */}
      <div className="w-full aspect-[3/2] bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Image Area (600x400)</span>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-headline leading-tight">
          {listing.brand} {listing.model}
        </CardTitle>
        <CardDescription className="flex items-center text-sm pt-1">
          <Tag className="h-4 w-4 mr-1.5 text-primary" /> {listing.type}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 pb-3">
        <p className="text-2xl font-semibold text-primary">{formatPrice(listing.price)}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1.5" /> {listing.location}
        </div>
        <p className="text-sm text-foreground/80 line-clamp-3">{listing.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-0 p-4 bg-muted/30">
        <div className="flex gap-2">
          <Button
            variant={listing.userInteraction === 'liked' ? 'default' : 'outline'}
            size="icon"
            onClick={() => handleInteraction('liked')}
            className={`transition-all duration-200 ease-in-out transform hover:scale-110 ${listing.userInteraction === 'liked' ? 'bg-green-500 hover:bg-green-600 text-white border-green-500' : 'border-primary/50 hover:bg-green-100'}`}
            aria-label="Like listing"
          >
            <ThumbsUp className="h-5 w-5" />
          </Button>
          <Button
            variant={listing.userInteraction === 'disliked' ? 'destructive' : 'outline'}
            size="icon"
            onClick={() => handleInteraction('disliked')}
            className={`transition-all duration-200 ease-in-out transform hover:scale-110 ${listing.userInteraction === 'disliked' ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' : 'border-destructive/50 hover:bg-red-100'}`}
            aria-label="Dislike listing"
          >
            <ThumbsDown className="h-5 w-5" />
          </Button>
        </div>
        <Button
          asChild
          variant="default"
          className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-200 ease-in-out transform hover:scale-105 w-full sm:w-auto"
        >
          <a href={listing.listingUrl} target={listing.isExternal ? '_blank' : '_self'} rel={listing.isExternal ? 'noopener noreferrer' : ''}>
            View Listing
            {listing.isExternal && <ExternalLink className="ml-2 h-4 w-4" />}
            {!listing.isExternal && <Info className="ml-2 h-4 w-4" />}
          </a>
        </Button>
      </CardFooter>
       <div className="px-4 pb-2 text-xs text-muted-foreground">Source: {listing.source}</div>
    </Card>
  );
}
