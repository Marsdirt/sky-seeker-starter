'use client';

import React, { useState } from 'react';

// Example data for results cards (we'll make this dynamic later)
const exampleResults = [
  {
    title: 'Cessna 172 Skyhawk',
    type: 'Single Engine Piston',
    price: 150000,
    location: 'Wichita, KS',
    description: 'Classic and reliable trainer/personal aircraft. Low hours, well maintained.',
    source: 'Barnstormers',
    url: '#'
  },
  {
    title: 'Piper Cherokee PA-28',
    type: 'Single Engine Piston',
    price: 85000,
    location: 'Vero Beach, FL',
    description: 'Well-maintained Piper Cherokee, perfect for VFR cruising and flight training.',
    source: 'Trade-a-Plane',
    url: '#'
  },
  {
    title: 'Cirrus SR22',
    type: 'Single Engine Piston',
    price: 450000,
    location: 'Duluth, MN',
    description: 'High-performance aircraft with CAPS parachute system.',
    source: 'Controller',
    url: '#'
  }
];

export default function HomePage() {
  // Filter state
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [region, setRegion] = useState('');
  const [results, setResults] = useState<typeof exampleResults>([]);

  // Handle search (show sample results for now)
  const handleSearch = () => {
    setResults(exampleResults);
  };

  // Handle reset
  const handleReset = () => {
    setBrand('');
    setModel('');
    setType('');
    setMinPrice('');
    setMaxPrice('');
    setRegion('');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center px-8 py-4 bg-white shadow">
        <span className="text-blue-500 text-2xl mr-2">✈️</span>
        <span className="text-blue-600 text-2xl font-bold">Sky-Seeker</span>
      </header>
      {/* Main content */}
      <div className="flex max-w-7xl mx-auto py-8 px-2">
        {/* Sidebar (Filters) */}
        <aside className="w-80 bg-white rounded-xl shadow p-6 mr-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-2">🛩️</span> Filter Aircraft
          </h2>
          <div className="mb-4">
            <label className="block font-medium">Brand</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="e.g., Cessna, F..."
              value={brand}
              onChange={e => setBrand(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Model</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="e.g., 172, SR22"
              value={model}
              onChange={e => setModel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Aircraft Type</label>
            <select
              className="w-full border rounded px-3 py-2 mt-1"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Single Engine">Single Engine</option>
              <option value="Bush Plane">Bush Plane</option>
              <option value="Kit Plane">Kit Plane</option>
              {/* Add more as needed */}
            </select>
          </div>
          <div className="mb-4 flex gap-2">
            <div className="flex-1">
              <label className="block font-medium">Min Price</label>
              <input
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="$ e.g., 50,000"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                type="number"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium">Max Price</label>
              <input
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="$ e.g., 200,000"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                type="number"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-medium">Regional Location</label>
            <input
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="e.g., California, Midwest"
              value={region}
              onChange={e => setRegion(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              className="flex-1 bg-gray-200 rounded px-4 py-2 font-bold"
              onClick={handleReset}
              type="button"
            >
              Reset
            </button>
            <button
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded px-4 py-2 font-bold"
              onClick={handleSearch}
              type="button"
            >
              Search Aircraft
            </button>
          </div>
        </aside>
        {/* Results */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.length === 0 ? (
              <div className="col-span-full text-gray-500 mt-12 text-center">
                No results yet. Fill out the filters and click <b>Search Aircraft</b>.
              </div>
            ) : (
              results.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="bg-gray-200 rounded-md h-40 mb-4 flex items-center justify-center text-gray-400 text-xl">
                    600 × 400
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <div className="text-sm text-gray-500 mb-2">{item.type}</div>
                    <div className="text-blue-600 text-xl font-bold mb-2">{`$${item.price.toLocaleString()}`}</div>
                    <div className="text-sm text-gray-600 mb-2">{item.location}</div>
                    <div className="text-sm text-gray-700 mb-2">{item.description}</div>
                  </div>
                  <div className="flex items-center mt-2 gap-2">
                    <button className="p-2 rounded hover:bg-gray-100" title="Like">👍</button>
                    <button className="p-2 rounded hover:bg-gray-100" title="Dislike">👎</button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto bg-yellow-400 hover:bg-yellow-500 text-white rounded px-3 py-1 font-semibold"
                    >
                      View Listing
                    </a>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Source: {item.source}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
