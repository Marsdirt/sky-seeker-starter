import React from 'react';

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

export default function AircraftFilter({
  brand, setBrand,
  model, setModel,
  type, setType,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  region, setRegion,
  onReset,
  onSearch
}: {
  brand: string, setBrand: (v: string) => void,
  model: string, setModel: (v: string) => void,
  type: string, setType: (v: string) => void,
  minPrice: string, setMinPrice: (v: string) => void,
  maxPrice: string, setMaxPrice: (v: string) => void,
  region: string, setRegion: (v: string) => void,
  onReset: () => void,
  onSearch: () => void
}) {
  return (
    <aside className="bg-white rounded-2xl shadow p-6 w-full max-w-xs mx-auto">
      <h2 className="text-lg font-bold mb-6 flex items-center">
        <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 16l2 2 6-6m2 2A9 9 0 11.999 12a9 9 0 0120 0z"/></svg>
        Filter Aircraft
      </h2>
      <div className="mb-4 flex gap-3">
        <div className="flex-1">
          <label className="block font-semibold mb-1">Brand</label>
          <input
            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
            placeholder="e.g., Cessna, F"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-1">Model</label>
          <input
            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
            placeholder="e.g., 172, SR22"
            value={model}
            onChange={e => setModel(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Aircraft Type</label>
        <select
          className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {AIRCRAFT_TYPES.map((t) => (
            <option key={t} value={t === "All Types" ? "" : t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex gap-3">
        <div className="flex-1">
          <label className="block font-semibold mb-1">Min Price</label>
          <input
            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
            placeholder="$ e.g., 50,000"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            type="number"
          />
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-1">Max Price</label>
          <input
            className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
            placeholder="$ e.g., 200,000"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            type="number"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-1">Regional Location</label>
        <input
          className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
          placeholder="e.g., California, Midwest"
          value={region}
          onChange={e => setRegion(e.target.value)}
        />
      </div>
      <div className="flex gap-2 mt-2">
        <button
          className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg px-4 py-2 font-bold text-gray-700 bg-white hover:bg-gray-100 gap-2"
          onClick={onReset}
          type="button"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M5.07 19A9 9 0 1021 12.93M21 4A9 9 0 005.07 19"/></svg>
          Reset
        </button>
        <button
          className="flex-1 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2 font-bold gap-2"
          onClick={onSearch}
          type="button"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          Search Aircraft
        </button>
      </div>
    </aside>
  );
}
