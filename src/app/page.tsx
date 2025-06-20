'use client';

import React, { useState } from 'react';
import AircraftFilter from '../components/AircraftFilter';

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
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [region, setRegion] = useState('');
  const [results, setResults] = useState<typeof exampleResults>([]);

  const handleSearch = () => {
    setResults(exampleResults);
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
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-center mb-8">
        <span className="text-blue-500 text-3xl mr-2">✈️</span>
        <span className="text-blue-600 text-4xl font-extrabold">Sky-Seeker</span>
      </header>

      {/* Filter/Search Section */}
      <div className="flex flex-col items-center">
        <AircraftFilter
          brand={brand} setBrand={setBrand}
          model={model} setModel={setModel}
          type={type} setType={setType}
          minPrice={minPrice} setMinPrice={setMinPrice}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          region={region} setRegion={setRegion}
          onReset={handleReset}
          onSearch={handleSearch}
        />
      </div>

      {/* Results (Listings) */}
      <section className="max-w-xl mx-auto mt-10">
        {results.length === 0 ? (
          <div className="text-gray-500 mt-4 text-center">
            No results yet. Fill out the filters and click <b>Search Aircraft</b>.
          </div>
        ) : (
          results.map((item, idx) => (
            <div key={idx} className="mb-8 pb-6 border-b bg-white rounded-xl shadow">
              <div className="bg-gray-200 rounded-md h-40 mb-2 flex items-center justify-center text-gray-400 text-xl">
                600 × 400
              </div>
              <h3 className="text-lg font-bold mb-1 px-6">{item.title}</h3>
              <div className="text-sm text-gray-500 mb-2 px-6">{item.type}</div>
              <div className="text-blue-600 text-xl font-bold mb-2 px-6">{`$${item.price.toLocaleString()}`}</div>
              <div className="text-sm text-gray-600 mb-2 px-6">{item.location}</div>
              <div className="text-sm text-gray-700 mb-2 px-6">{item.description}</div>
              <div className="flex items-center mt-2 gap-2 px-6">
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
              <div className="text-xs text-gray-400 mt-2 px-6">
                Source: {item.source}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
