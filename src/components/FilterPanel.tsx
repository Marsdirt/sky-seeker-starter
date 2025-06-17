
'use client';

import type { SearchFilters } from '@/types';
import { AIRCRAFT_TYPES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Filter, Search, RotateCcw } from 'lucide-react';

interface FilterPanelProps {
  filters: SearchFilters;
  onFilterChange: (newFilters: SearchFilters) => void;
  onSearch: () => void;
  onResetFilters: () => void;
  isSearching: boolean;
}

export function FilterPanel({
  filters,
  onFilterChange,
  onSearch,
  onResetFilters,
  isSearching,
}: FilterPanelProps) {
  const handleChange = (field: keyof SearchFilters, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Filter className="h-6 w-6 text-primary" />
          Filter Aircraft
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="brand" className="font-semibold">Brand</Label>
              <Input
                id="brand"
                type="text"
                placeholder="e.g., Cessna, Piper"
                value={filters.brand}
                onChange={(e) => handleChange('brand', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="model" className="font-semibold">Model</Label>
              <Input
                id="model"
                type="text"
                placeholder="e.g., 172, SR22"
                value={filters.model}
                onChange={(e) => handleChange('model', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="type" className="font-semibold">Aircraft Type</Label>
            <Select
              value={filters.type}
              onValueChange={(value) => handleChange('type', value)}
            >
              <SelectTrigger id="type" className="w-full mt-1">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {AIRCRAFT_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="minPrice" className="font-semibold">Min Price</Label>
              <div className="relative mt-1">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="e.g., 50000"
                  value={filters.minPrice}
                  onChange={(e) => handleChange('minPrice', e.target.value)}
                  className="pl-8"
                  min="0"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="maxPrice" className="font-semibold">Max Price</Label>
               <div className="relative mt-1">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="e.g., 200000"
                  value={filters.maxPrice}
                  onChange={(e) => handleChange('maxPrice', e.target.value)}
                  className="pl-8"
                  min="0"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="location" className="font-semibold">Regional Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="e.g., California, Midwest"
              value={filters.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onResetFilters} 
              className="w-full sm:w-auto" 
              disabled={isSearching}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button type="submit" className="w-full flex-grow bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSearching}>
              <Search className="mr-2 h-4 w-4" />
              {isSearching ? 'Searching...' : 'Search Aircraft'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
