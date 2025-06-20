'use client';

import React, { useState } from "react";
import AircraftFilter from "../components/AircraftFilter";
import { REGIONS } from "../data/regions";

// Helper to build search URLs for Craigslist and Facebook (multi-link mode)
function buildSearchLinks({
  brand,
  model,
  type,
  minPrice,
  maxPrice,
  regions,
}: {
  brand: string;
  model: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  regions: string[];
}) {
  const regionObjs = REGIONS.filter((r) => regions.includes(r.name));
  const searchTerms = [brand, model, type !== "" ? type : ""]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, "+");

  // Craigslist: one link per selected region/city
  const craigslistLinks = regionObjs
    .flatMap((region) =>
      region.craigslist.map((subdomain) => {
        let url = `https://${subdomain}.craigslist.org/search/sss?query=${encodeURIComponent(
          searchTerms + " airplane"
        )}`;
        if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
        if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
        return {
          name: `Craigslist (${region.name}: ${subdomain})`,
          url,
        };
      })
    );

  // Facebook: one link per region's major city
  const facebookLinks = regionObjs
    .flatMap((region) =>
      region.facebookCities.map((city) => {
        // Facebook Marketplace does not support price in search URL, so only pass query and location
        return {
          name: `Facebook Marketplace (${city})`,
          url: `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(
            searchTerms + " airplane"
          )}&location=${encodeURIComponent(city)}`,
        };
      })
    );

  // For aviation classifieds, append region name for location context
  const regionNames = regionObjs.map((r) => r.name).join(" ");
  const classifiedSearch = [searchTerms, regionNames].filter(Boolean).join(" ");

  // Barnstormers: Use only query, no extra parameters
  const barnstormersUrl = classifiedSearch
    ? `https://www.barnstormers.com/classifieds?search=${encodeURIComponent(
        classifiedSearch
      )}`
    : "https://www.barnstormers.com/classifieds";

  // Trade-A-Plane: Only include make/model if present
  const tapParams = [];
  if (brand) tapParams.push(`make=${encodeURIComponent(brand)}`);
  if (model) tapParams.push(`model=${encodeURIComponent(model)}`);
  // type/category can be added if you map them to Trade-A-Plane's categories

  const tradeAPlaneUrl =
    "https://www.trade-a-plane.com/search?" +
    [
      tapParams.join("&"),
      "listing_id=",
      "search_type=aircraft",
    ]
      .filter(Boolean)
      .join("&");

  // Controller: Use the full classified search string
  const controllerUrl = classifiedSearch
    ? `https://www.controller.com/listings/for-sale/?keywords=${encodeURIComponent(
        classifiedSearch
      )}`
    : "https://www.controller.com/listings/for-sale/";

  return [
    {
      name: "Barnstormers",
      url: barnstormersUrl,
    },
    {
      name: "Trade-A-Plane",
      url: tradeAPlaneUrl,
    },
    {
      name: "Controller",
      url: controllerUrl,
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
  const [regions, setRegions] = useState<string[]>([]);
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
    setRegions([]);
    setShowLinks(false);
  };

  const searchLinks = buildSearchLinks({
    brand,
    model,
    type,
    minPrice,
    maxPrice,
    regions,
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
          regions={regions}
          setRegions={setRegions}
          onReset={handleReset}
          onSearch={handleSearch}
        />

        {/* Search Links */}
        {showLinks && (
          <section className="mt-8 bg-white rounded-xl shadow p-6 w-full max-w-xs">
            <h3 className="text-lg font-bold mb-4 text-center">
              Search Results on Major Sites
            </h3>
            <ul className="space-y-3">
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
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-400 mt-4 text-center">
              These links open the official sites with your search.
              <br />
              Craigslist and Facebook links are provided separately for each major city/area in your selected region(s).
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
