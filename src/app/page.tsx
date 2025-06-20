'use client';

import React, { useState } from 'react';

// Example data for results cards
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

// Expanded aircraft types
const AIRCRAFT_TYPES = [
  "All Types",
  "Single Engine Piston",
  "Multi Engine Piston",
  "Turboprop",
  "Jet",
  "Helicopter",
  "Experimental/Kit",
  "Light Sport/LSA",
  "Warbird/Antique",
  "Bush Plane",
  "Amphibious/Float"
];

export default function HomePage() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [region, setRegion] = useState('');
  const [results, setResults] = useState<typeof exampleResults>([]);

  const handleSearch = () => {
    setResults(exampleResults); // Later: filter based on user input
  };

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
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="flex items-center mb-6">
        <span className="text-blue-500 text-3xl mr-2">✈️</span>
        <span className="text-blue-600 text-4xl font-extrabold">Sky-Seeker</span>
      </header>

      {/* Filter/Search Section */}
      <section className="max-w-xl mx-auto mb-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-8">
          Search Every Hangar
        </h2>
        <div className="mb-6">
          <label className="block font-medium mb-2">Brand</label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., Cessna"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block font-medium mb-2">Model</label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., 172, SR22"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block font-medium mb-2">Aircraft Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            {AIRCRAFT_TYPES.map((t) => (
              <option key={t} value={t === "All Types" ? "" : t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="mb-6 flex gap-2">
          <div className="flex-1">
            <label className="block font-medium mb-2">Min Price</label>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="$ e.g., 50,000"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              type="number"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium mb-2">Max Price</label>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="$ e.g., 200,000"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              type="number"
            />
          </div>
        </div>
        <div className="mb-8">
          <label className="block font-medium mb-2">Regional Location</label>
          <input
            className="w-full border rounded px-3 py-2"
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
      </section>

      {/* Results (Listings) */}
      <section className="max-w-xl mx-auto">
        {results.length === 0 ? (
          <div className="text-gray-500 mt-4 text-center">
            No results yet. Fill out the filters and click <b>Search Aircraft</b>.
          </div>
        ) : (
          results.map((item, idx) => (
            <div key={idx} className="mb-8 pb-6 border-b">
              <div className="bg-gray-200 rounded-md h-40 mb-2 flex items-center justify-center text-gray-400 text-xl">
                600 × 400
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <div className="text-sm text-gray-500 mb-2">{item.type}</div>
              <div className="text-blue-600 text-xl font-bold mb-2">{`$${item.price.toLocaleString()}`}</div>
              <div className="text-sm text-gray-600 mb-2">{item.location}</div>
              <div className="text-sm text-gray-700 mb-2">{item.description}</div>
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
      </section>
    </div>
  );
}
