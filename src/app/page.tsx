'use client';

import React, { useState } from "react";
import AircraftFilter from "../components/AircraftFilter";
import { STATES } from "../data/states";
import { CRAIGSLIST_CITIES_BY_STATE } from "../data/craigslistByState";
import { FACEBOOK_CITIES_BY_STATE } from "../data/facebookByState";

// Helper to build Barnstormers advanced search URL (auto search results)
function makeBarnstormersUrl({
  brand,
  model,
  minPrice,
  maxPrice,
  stateAbbrs,
}: {
  brand: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  stateAbbrs: string[];
}) {
  const params = [
    `headline=`,
    `body=`,
    `part_num=`,
    `mfg=${encodeURIComponent(brand || "")}`,
    `model=${encodeURIComponent(model || "")}`,
    `user__profile__company=`,
    `user__last_name=`,
    `user__first_name=`,
    `user__profile__country=`,
    `specialcase__state=${encodeURIComponent(stateAbbrs.join(", "))}`,
    `user__profile__city=`,
    `user__profile__uzip=`,
    `specialcase__phone=`,
    `user__email=`,
    `my_cats__name=`,
    `price__gte=${encodeURIComponent(minPrice || "")}`,
    `price__lte=${encodeURIComponent(maxPrice || "")}`,
    `search_type=advanced`,
    `keyword=`,
  ];
  return "https://www.barnstormers.com/cat_search.php?" + params.join("&");
}

// Helper for Controller search URL with multiple states (pipe-separated)
function makeControllerUrl({
  brand,
  model,
  type,
  minPrice,
  maxPrice,
  stateNames,
}: {
  brand: string;
  model: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  stateNames: string[];
}) {
  const searchTerms = [brand, model, type].filter(Boolean).join(" ");
  let url = `https://www.controller.com/listings/search?keywords=${encodeURIComponent(searchTerms)}`;
  if (minPrice || maxPrice) {
    url += `&Price=${encodeURIComponent(`${minPrice || ""}*${maxPrice || ""}`)}`;
  }
  if (stateNames.length) {
    url += `&State=${encodeURIComponent(stateNames.join("|").toUpperCase())}`;
  }
  return url;
}

function buildSearchLinks({
  brand,
  model,
  type,
  minPrice,
  maxPrice,
  selectedStateAbbrs,
}: {
  brand: string;
  model: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  selectedStateAbbrs: string[];
}): { name: string; url: string; note?: string }[] {
  // State helpers
  const abbrToName = Object.fromEntries(STATES.map(s => [s.abbr, s.name]));
  const stateNames = selectedStateAbbrs.map(abbr => abbrToName[abbr]);
  const stateAbbrs = selectedStateAbbrs;

  // Craigslist: Maximize coverage by listing every city/subdomain in each selected state
  const craigslistLinks = stateAbbrs.flatMap((abbr) =>
    (CRAIGSLIST_CITIES_BY_STATE[abbr] || []).map(({ city, subdomain }) => {
      let url = `https://${subdomain}.craigslist.org/search/sss?query=${encodeURIComponent(
        [brand, model, type].filter(Boolean).join(" ") + " aircraft"
      )}`;
      if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
      if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
      return {
        name: `Craigslist (${city})`,
        url,
        note: "",
      };
    })
  );

  // Facebook: Same, all major cities in each selected state
  const facebookLinks = stateAbbrs.flatMap((abbr) =>
    (FACEBOOK_CITIES_BY_STATE[abbr] || []).map((city) => {
      let fbQuery = [brand, model, type].filter(Boolean).join(" ") + " aircraft";
      if (minPrice || maxPrice) {
        fbQuery += ` $${minPrice || ""}${minPrice && maxPrice ? "-" : ""}${maxPrice || ""}`;
      }
      return {
        name: `Facebook Marketplace (${city})`,
        url: `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(
          fbQuery
        )}&location=${encodeURIComponent(city)}`,
        note:
          minPrice || maxPrice
            ? "Note: Facebook Marketplace does not support price filters in the URL. Please use the price filter on Facebook."
            : "",
      };
    })
  );

  // Barnstormers: Single link for all selected states (comma-separated)
  const barnstormersUrl = makeBarnstormersUrl({
    brand,
    model,
    minPrice,
    maxPrice,
    stateAbbrs,
  });

  // Trade-A-Plane: No state param, just use full search as before
  const keyword = [brand, model, type].filter(Boolean).join(" ").trim();
  let tradeAPlaneUrl = "https://www.trade-a-plane.com/search?s-type=aircraft";
  if (keyword) {
    tradeAPlaneUrl += `&s-keyword-search=${encodeURIComponent(keyword.replace(/\s+/g, '+'))}`;
    tradeAPlaneUrl += `&s-original-search=${encodeURIComponent(keyword)}`;
  }
  if (minPrice) {
    tradeAPlaneUrl += `&price-min=${encodeURIComponent(minPrice)}`;
  }
  if (maxPrice) {
    tradeAPlaneUrl += `&price-max=${encodeURIComponent(maxPrice)}`;
  }

  // Controller: Single link for all selected states (pipe-separated, uppercase)
  const controllerUrl = makeControllerUrl({
    brand,
    model,
    type,
    minPrice,
    maxPrice,
    stateNames,
  });

  return [
    {
      name: "Barnstormers",
      url: barnstormersUrl,
      note: "",
    },
    {
      name: "Trade-A-Plane",
      url: tradeAPlaneUrl,
      note: "",
    },
    {
      name: "Controller",
      url: controllerUrl,
      note: "",
    },
    ...craigslistLinks,
    ...facebookLinks,
  ];
}

export default function HomePage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [showLinks, setShowLinks] = useState(false);

  const handleSearch = () => {
    setShowLinks(true);
  };

  const handleReset = () => {
    setBrand("");
    setModel("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedStates([]);
    setShowLinks(false);
  };

  // Multi-select dropdown for states
  function StateSelector({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
    return (
      <div className="mb-4">
        <label className="block font-semibold mb-1">State(s):</label>
        <select
          multiple
          value={value}
          onChange={e =>
            onChange(
              Array.from(e.target.selectedOptions, option => option.value)
            )
          }
          className="border rounded px-2 py-1 w-64 h-64" // Taller dropdown
          size={12} // Show more options at once
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
        {/* Remove region boxes by not passing them */}
        <AircraftFilter
          brand={brand}
          setBrand={setBrand}
          model={model}
          setModel={setModel}
          type={type}
          setType={setType}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          regions={[]} // legacy prop, pass empty
          setRegions={() => {}} // legacy prop, do nothing
          onReset={handleReset}
          onSearch={handleSearch}
        />

        {/* State selector */}
        <StateSelector value={selectedStates} onChange={setSelectedStates} />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-bold mt-2 mb-4 shadow-lg transition"
          style={{ minWidth: "180px" }}
        >
          Search
        </button>

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
