import React from "react";
import RegionMultiSelect from "./RegionMultiSelect";

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
  "Amphibious/Float",
];

type AircraftFilterProps = {
  brand: string;
  setBrand: (v: string) => void;
  model: string;
  setModel: (v: string) => void;
  type: string;
  setType: (v: string) => void;
  minPrice: string;
  setMinPrice: (v: string) => void;
  maxPrice: string;
  setMaxPrice: (v: string) => void;
  regions: string[];
  setRegions: (v: string[]) => void;
  onReset: () => void;
  onSearch: () => void;
};

export default function AircraftFilter({
  brand,
  setBrand,
  model,
  setModel,
  type,
  setType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  regions,
  setRegions,
  onReset,
  onSearch,
}: AircraftFilterProps) {
  return (
    <aside className="bg-white rounded-2xl shadow p-6 w-full max-w-xs mx-auto">
      <h2 className="text-lg font-bold mb-6">Search Every Hangar</h2>
      <div className="mb-4 flex gap-3">
        <div className="flex-1">
          <label className="block font-semibold mb-3">Brand</label>
          <input
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400"
            placeholder="e.g., Cessna, F"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-3">Model</label>
          <input
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400"
            placeholder="e.g., 172, SR22"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-3">Aircraft Type</label>
        <select
          className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {AIRCRAFT_TYPES.map((t) => (
            <option key={t} value={t === "All Types" ? "" : t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex gap-3">
        <div className="flex-1">
          <label className="block font-semibold mb-3">Min Price</label>
          <input
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400"
            placeholder="$ e.g., 50,000"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            type="number"
          />
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-3">Max Price</label>
          <input
            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 placeholder-gray-400"
            placeholder="$ e.g., 200,000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            type="number"
          />
        </div>
      </div>
      {/* Region Multi-select */}
      <RegionMultiSelect selected={regions} setSelected={setRegions} />
      <div className="flex gap-2 mt-2">
        <button
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 font-bold text-gray-700 bg-white hover:bg-gray-100 transition"
          onClick={onReset}
          type="button"
        >
          Reset
        </button>
        <button
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2 font-bold transition"
          onClick={onSearch}
          type="button"
        >
          Search Aircraft
        </button>
      </div>
    </aside>
  );
}
