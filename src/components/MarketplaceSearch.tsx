"use client";
import React, { useState } from "react";
import { buildCraigslistSearchUrl } from "../utils/buildCraigslistUrl";
import { buildFacebookMarketplaceUrl } from "../utils/buildFacebookUrl";

export default function MarketplaceSearch() {
  const [zip, setZip] = useState("93702");
  const [distance, setDistance] = useState(1000);
  const [query, setQuery] = useState("cessna");
  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(100000);

  const craigslistUrl = buildCraigslistSearchUrl({
    zip,
    distance,
    minPrice,
    maxPrice,
    query
  });

  const facebookUrl = buildFacebookMarketplaceUrl({
    zip,
    distance,
    query
  });

  return (
    <div>
      <h2>Search Craigslist & Facebook</h2>
      <form onSubmit={e => e.preventDefault()}>
        <input value={zip} onChange={e => setZip(e.target.value)} placeholder="ZIP code" />
        <input type="number" value={distance} onChange={e => setDistance(Number(e.target.value))} placeholder="Distance (miles)" />
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search terms" />
        <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} placeholder="Min price" />
        <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} placeholder="Max price" />
      </form>
      <div>
        <a href={craigslistUrl} target="_blank" rel="noopener noreferrer">Search Craigslist</a>
      </div>
      <div>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Search Facebook Marketplace</a>
      </div>
    </div>
  );
}