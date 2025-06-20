import React from "react";
import { REGIONS } from "../data/regions";

type RegionMultiSelectProps = {
  selected: string[];
  setSelected: (values: string[]) => void;
};

export default function RegionMultiSelect({ selected, setSelected }: RegionMultiSelectProps) {
  function toggleRegion(region: string) {
    setSelected(
      selected.includes(region)
        ? selected.filter((r) => r !== region)
        : [...selected, region]
    );
  }

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-3">Region(s)</label>
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((region) => (
          <button
            key={region.name}
            type="button"
            className={`px-3 py-1 rounded-full border ${
              selected.includes(region.name)
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
            onClick={() => toggleRegion(region.name)}
          >
            {region.name}
          </button>
        ))}
      </div>
    </div>
  );
}
