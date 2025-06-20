'use client';

import React, { useState } from "react";
import AircraftFilter from "../components/AircraftFilter";
import { STATES } from "../data/states";
import { CRAIGSLIST_CITIES_BY_STATE } from "../data/craigslistByState";
import { FACEBOOK_CITIES_BY_STATE } from "../data/facebookByState";

// ...import/link other helpers as before...

export default function HomePage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [showLinks, setShowLinks] = useState(false);

  const handleSearch = () => setShowLinks(true);
  const handleReset = () => {
    setBrand("");
    setModel("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedStates([]);
    setShowLinks(false);
  };

  // State dropdown (tall, with better visibility)
  function StateSelector({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
    return (
      <div className="mb-3 w-full">
        <label className="block font-semibold mb-1">State(s):</label>
        <select
          multiple
          value={value}
          onChange={e =>
            onChange(Array.from(e.target.selectedOptions, option => option.value))
          }
          className="border rounded px-2 py-1 w-full h-48 text-base"
          size={12}
        >
          {STATES.map((state) => (
            <option key={state.abbr} value={state.abbr}>
              {state.name}
            </option>
          ))}
        </select>
        <div className="text-xs text-gray-500 mt-1">
          Hold Ctrl (Windows) or Cmd (Mac) to select multiple states.
        </div>
      </div>
    );
  }

  const searchLinks = buildSearchLinks({
    brand,
    model,
    type,
    minPrice,
    maxPrice,
    selectedStateAbbrs: selectedStates,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-center mb-8">
        <span className="text-blue-500 text-3xl mr-2">✈️</span>
        <span className="text-blue-600 text-4xl font-extrabold">
          Sky-Seeker
        </span>
      </header>

      {/* Filter/Search Section */}
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-xl shadow p-6 w-full max-w-md mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Search Every Hangar</h2>
          {/* Inline all filter fields (no region fields) */}
          <div className="flex flex-col gap-3">
            <div>
              <label className="block font-semibold mb-1">Brand</label>
              <input
                className="border rounded px-2 py-1 w-full"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                placeholder="e.g. Piper"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Model</label>
              <input
                className="border rounded px-2 py-1 w-full"
                value={model}
                onChange={e => setModel(e.target.value)}
                placeholder="e.g. Cherokee"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Aircraft Type</label>
              <input
                className="border rounded px-2 py-1 w-full"
                value={type}
                onChange={e => setType(e.target.value)}
                placeholder="All Types"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Min Price</label>
              <input
                className="border rounded px-2 py-1 w-full"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                type="number"
                min="0"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Max Price</label>
              <input
                className="border rounded px-2 py-1 w-full"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                type="number"
                min="0"
              />
            </div>
            <StateSelector value={selectedStates} onChange={setSelectedStates} />
            <div className="flex gap-3 justify-center mt-2">
              <button
                onClick={handleReset}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition"
              >
                Reset
              </button>
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-bold shadow transition"
                style={{ minWidth: "180px" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Search Links */}
        {showLinks && (
          <section className="mt-8 bg-white rounded-xl shadow p-6 w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4 text-center">
              Search Results on Major Sites
            </h3>
            <ul className="space-y-3 max-h-[600px] overflow-y-auto">
              {searchLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold text-center transition"
                  >
                    {link.name}
                  </a>
                  {link.note && link.note !== "" && (
                    <div className="text-xs text-red-500 mt-1 text-center">
                      {link.note}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-400 mt-4 text-center">
              Craigslist and Facebook links are provided for every major city/metro area in your selected state(s).
              <br />
              <span className="text-red-500">
                Facebook Marketplace does not currently support price filters in the search URL; please use the price filter on Facebook after clicking the link.
              </span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
