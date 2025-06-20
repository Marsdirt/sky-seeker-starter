'use client';

import React, { useState } from "react";
import AircraftFilter from "../components/AircraftFilter";
import { REGIONS } from "../data/regions";

// Helper to build search URLs for various marketplaces
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
}): { name: string; url: string; note?: string }[] {
  const regionObjs = REGIONS.filter((r) => regions.includes(r.name));
  const searchTerms = [brand, model].filter(Boolean).join(" ").replace(/\s+/g, " ");

  // Craigslist: one link per selected region/city, using "aircraft"
  const craigslistLinks = regionObjs
    .flatMap((region) =>
      region.craigslist.map((subdomain) => {
        let url = `https://${subdomain}.craigslist.org/search/sss?query=${encodeURIComponent(
          [brand, model, type].filter(Boolean).join(" ") + " aircraft"
        )}`;
        if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
        if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
        return {
          name: `Craigslist (${region.name}: ${subdomain})`,
          url,
          note: "",
        };
      })
    );

  // Facebook: one link per region's major city, use "aircraft" and suggest user filter price manually
  const facebookLinks = regionObjs
    .flatMap((region) =>
      region.facebookCities.map((city) => {
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

  // Barnstormers: Only brand and model in keyword (no note)
  const barnstormersUrl =
    searchTerms
      ? `https://www.barnstormers.com/cat_search.php?keyword=${encodeURIComponent(searchTerms)}`
        + (minPrice ? `&min_price=${encodeURIComponent(minPrice)}` : "")
        + (maxPrice ? `&max_price=${encodeURIComponent(maxPrice)}` : "")
      : "https://www.barnstormers.com/cat_search.php";

  // Trade-A-Plane: improved URL supporting price, keyword, and s-type
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

  // Controller: Use the full classified search string
  const classifiedSearch = [brand, model, type, regionObjs.map((r) => r.name).join(" ")].filter(Boolean).join(" ");
  const controllerUrl = classifiedSearch
    ? `https://www.controller.com/listings/for-sale/?keywords=${encodeURIComponent(
        classifiedSearch
      )}`
    : "https://www.controller.com/listings/for-sale/";

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
                  {link.note && link.note !== "" && (
                    <div className="text-xs text-red-500 mt-1 text-center">
                      {link.note}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-400 mt-4 text-center">
              These links open the official sites with your search.
              <br />
              Craigslist and Facebook links are provided separately for each major city/area in your selected region(s).
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
