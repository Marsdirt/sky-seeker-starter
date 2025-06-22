"use client";

import React, { useState } from "react";
import Select from "react-select";
import { STATES } from "../data/states";

// State to Craigslist city/zip mapping
const CRAIGSLIST_STATE_CITIES: Record<string, { city: string; zip: string; subdomain: string }> = {
  AL: { city: "clanton", zip: "35045", subdomain: "bham" },
  AK: { city: "fairbanks", zip: "99701", subdomain: "fairbanks" },
  AZ: { city: "phoenix", zip: "85003", subdomain: "phoenix" },
  AR: { city: "littlerock", zip: "72201", subdomain: "littlerock" },
  CA: { city: "madera", zip: "93637", subdomain: "fresno" },
  CO: { city: "coloradosprings", zip: "80903", subdomain: "cosprings" },
  CT: { city: "middletown", zip: "06457", subdomain: "newhaven" },
  DE: { city: "dover", zip: "19901", subdomain: "delaware" },
  FL: { city: "ocala", zip: "34470", subdomain: "ocala" },
  GA: { city: "macon", zip: "31201", subdomain: "macon" },
  HI: { city: "hilo", zip: "96720", subdomain: "hawaii" },
  ID: { city: "boise", zip: "83702", subdomain: "boise" },
  IL: { city: "springfield", zip: "62701", subdomain: "springfieldil" },
  IN: { city: "indianapolis", zip: "46201", subdomain: "indianapolis" },
  IA: { city: "desmoines", zip: "50309", subdomain: "desmoines" },
  KS: { city: "salina", zip: "67401", subdomain: "salina" },
  KY: { city: "lexington", zip: "40502", subdomain: "lexington" },
  LA: { city: "alexandria", zip: "71301", subdomain: "cenla" },
  ME: { city: "bangor", zip: "04401", subdomain: "maine" },
  MD: { city: "frederick", zip: "21701", subdomain: "frederick" },
  MA: { city: "worcester", zip: "01608", subdomain: "worcester" },
  MI: { city: "lansing", zip: "48915", subdomain: "lansing" },
  MN: { city: "stcloud", zip: "56301", subdomain: "stcloud" },
  MS: { city: "jackson", zip: "39201", subdomain: "jackson" },
  MO: { city: "columbia", zip: "65201", subdomain: "columbiamo" },
  MT: { city: "lewistown", zip: "59457", subdomain: "montana" },
  NE: { city: "grandisland", zip: "68801", subdomain: "grandisland" },
  NV: { city: "ely", zip: "89301", subdomain: "elko" },
  NH: { city: "concord", zip: "03301", subdomain: "nh" },
  NJ: { city: "trenton", zip: "08608", subdomain: "cnj" },
  NM: { city: "albuquerque", zip: "87102", subdomain: "albuquerque" },
  NY: { city: "utica", zip: "13501", subdomain: "utica" },
  NC: { city: "greensboro", zip: "27401", subdomain: "greensboro" },
  ND: { city: "bismarck", zip: "58501", subdomain: "bismarck" },
  OH: { city: "columbus", zip: "43215", subdomain: "columbus" },
  OK: { city: "oklahomacity", zip: "73102", subdomain: "oklahomocity" },
  OR: { city: "bend", zip: "97701", subdomain: "bend" },
  PA: { city: "harrisburg", zip: "17101", subdomain: "harrisburg" },
  RI: { city: "providence", zip: "02903", subdomain: "providence" },
  SC: { city: "columbia", zip: "29201", subdomain: "columbia" },
  SD: { city: "pierre", zip: "57501", subdomain: "sd" },
  TN: { city: "cookeville", zip: "38501", subdomain: "nashville" },
  TX: { city: "abilene", zip: "79601", subdomain: "abilene" },
  UT: { city: "saltlakecity", zip: "84111", subdomain: "saltlakecity" },
  VT: { city: "montpelier", zip: "05602", subdomain: "vermont" },
  VA: { city: "richmond", zip: "23219", subdomain: "richmond" },
  WA: { city: "ellensburg", zip: "98926", subdomain: "kpr" },
  WV: { city: "charleston", zip: "25301", subdomain: "charlestonwv" },
  WI: { city: "stevenspoint", zip: "54481", subdomain: "wausau" },
  WY: { city: "casper", zip: "82601", subdomain: "wyoming" },
};

// Facebook Marketplace region codes by state (leave out Hawaii)
const FACEBOOK_REGION_CODES: Record<string, string> = {
  AZ: "109546952404225", NM: "109546952404225", NV: "109546952404225", UT: "109546952404225", CA: "109546952404225",
  WA: "113093802034968", OR: "113093802034968", ID: "113093802034968", AK: "113093802034968",
  TX: "105590109474550",
  CO: "106084172755635", MT: "106084172755635", WY: "106084172755635",
  AL: "105701396129318", AR: "105701396129318", GA: "105701396129318", KY: "105701396129318", LA: "105701396129318",
  MS: "105701396129318", NC: "105701396129318", SC: "105701396129318", TN: "105701396129318", VA: "105701396129318", WV: "105701396129318",
  IL: "108018822553353", IN: "108018822553353", IA: "108018822553353", KS: "108018822553353", MI: "108018822553353",
  MN: "108018822553353", MO: "108018822553353", NE: "108018822553353", ND: "108018822553353", OH: "108018822553353",
  SD: "108018822553353", WI: "108018822553353",
  FL: "113541638659587",
  DE: "107524245944156", MD: "107524245944156", NJ: "107524245944156", NY: "107524245944156", PA: "107524245944156",
  CT: "107524245944156", ME: "107524245944156", MA: "107524245944156", NH: "107524245944156", RI: "107524245944156",
  VT: "107524245944156", DC: "107524245944156",
};

const STATE_OPTIONS = STATES.map(s => ({
  value: s.abbr,
  label: s.name
}));

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

function makeControllerUrl({
  brand,
  model,
  minPrice,
  maxPrice,
  stateNames,
}: {
  brand: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  stateNames: string[];
}) {
  const searchTerms = [brand, model].filter(Boolean).join(" ");
  let url = `https://www.controller.com/listings/search?keywords=${encodeURIComponent(searchTerms)}`;
  if (minPrice || maxPrice) {
    url += `&Price=${encodeURIComponent(`${minPrice || ""}*${maxPrice || ""}`)}`;
  }
  if (stateNames.length) {
    url += `&State=${encodeURIComponent(stateNames.join("|").toUpperCase())}`;
  }
  return url;
}

// Trade-A-Plane by state/zip/distance (fixed for server error)
function makeTradeAPlaneUrlByZip({
  brand,
  model,
  minPrice,
  maxPrice,
  zip,
  distance,
}: {
  brand: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  zip: string;
  distance: number;
}) {
  const keyword = [brand, model].filter(Boolean).join(" ").trim();
  let url = "https://www.trade-a-plane.com/search?";
  if (minPrice) url += `price-min=${parseFloat(minPrice).toFixed(2)}&`;
  if (maxPrice) url += `price-max=${parseFloat(maxPrice).toFixed(2)}&`;
  url += "s-type=aircraft&";
  if (keyword) {
    url += `s-keyword-search=${encodeURIComponent(keyword.replace(/\s+/g, '+'))}&`;
    url += `s-original-search=${encodeURIComponent(keyword)}&`;
  }
  if (distance && zip) {
    url += `user_distance=${distance}&user_zipcode=${encodeURIComponent(zip)}`;
  }
  return url.replace(/[&?]+$/, ""); // Remove trailing & or ?
}

function makeCraigslistUrl({
  subdomain,
  minPrice,
  maxPrice,
  zip,
  brand,
  model,
}: {
  subdomain: string;
  minPrice: string;
  maxPrice: string;
  zip: string;
  brand: string;
  model: string;
}) {
  let url = `https://${subdomain}.craigslist.org/search/ava?bundleDuplicates=1`;
  if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
  if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
  if (zip) url += `&postal=${encodeURIComponent(zip)}`;
  url += `&query=${encodeURIComponent([brand, model].filter(Boolean).join(" "))}`;
  url += `&search_distance=500&sort=date#search=2~gallery~-1`;
  return url;
}

// Facebook Marketplace builder
function makeFacebookMarketplaceUrl({
  regionCode,
  brand,
  model,
  minPrice,
  maxPrice,
}: {
  regionCode: string;
  brand: string;
  model: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  const query = encodeURIComponent([brand, model, "Aircraft"].filter(Boolean).join(" "));
  let url = `https://www.facebook.com/marketplace/${regionCode}/search?query=${query}&exact=false&category_id=1245`;
  if (minPrice) url += `&minPrice=${encodeURIComponent(minPrice)}`;
  if (maxPrice) url += `&maxPrice=${encodeURIComponent(maxPrice)}`;
  return url;
}

function buildSearchLinks({
  brand,
  model,
  minPrice,
  maxPrice,
  selectedStateAbbrs,
}: 
{
  brand: string;
  model: string;
  minPrice: string;
  maxPrice: string;
  selectedStateAbbrs: string[];
}): { name: string; url: string; note?: string }[] {
  const abbrToName = Object.fromEntries(STATES.map(s => [s.abbr, s.name]));
  const stateNames = selectedStateAbbrs.map(abbr => abbrToName[abbr]);
  const stateAbbrs = selectedStateAbbrs;

  // Barnstormers
  const barnstormersUrl = makeBarnstormersUrl({
    brand,
    model,
    minPrice,
    maxPrice,
    stateAbbrs,
  });

  // Controller
  const controllerUrl = makeControllerUrl({
    brand,
    model,
    minPrice,
    maxPrice,
    stateNames,
  });

  // Trade-A-Plane: nationwide if no state, else one link per selected state
  let tradeAPlaneLinks: { name: string; url: string }[] = [];
  if (stateAbbrs.length === 0) {
    tradeAPlaneLinks = [
      {
        name: "Trade-A-Plane (Nationwide)",
        url: makeTradeAPlaneUrlByZip({
          brand,
          model,
          minPrice,
          maxPrice,
          zip: "",      // No zip for nationwide
          distance: 0,  // No distance for nationwide
        }),
      },
    ];
  } else {
    tradeAPlaneLinks = stateAbbrs
      .filter(abbr => CRAIGSLIST_STATE_CITIES[abbr])
      .map(abbr => {
        const { zip } = CRAIGSLIST_STATE_CITIES[abbr];
        return {
          name: `Trade-A-Plane (${abbrToName[abbr]})`,
          url: makeTradeAPlaneUrlByZip({
            brand,
            model,
            minPrice,
            maxPrice,
            zip,
            distance: 500,
          }),
        };
      });
  }

  // Craigslist: one link per selected state
  const craigslistLinks = stateAbbrs
    .filter(abbr => CRAIGSLIST_STATE_CITIES[abbr])
    .map(abbr => {
      const { city, zip, subdomain } = CRAIGSLIST_STATE_CITIES[abbr];
      return {
        name: `Craigslist (${abbrToName[abbr]})`,
        url: makeCraigslistUrl({
          subdomain,
          minPrice,
          maxPrice,
          zip,
          brand,
          model,
        }),
      };
    });

  // Facebook Marketplace: one link per selected state (by region)
  const facebookLinks = stateAbbrs
    .filter(abbr => FACEBOOK_REGION_CODES[abbr])
    .map(abbr => ({
      name: `Facebook Marketplace (${abbrToName[abbr]})`,
      url: makeFacebookMarketplaceUrl({
        regionCode: FACEBOOK_REGION_CODES[abbr],
        brand,
        model,
        minPrice,
        maxPrice,
      }),
    }));

  return [
    {
      name: "Barnstormers",
      url: barnstormersUrl,
    },
    {
      name: "Controller",
      url: controllerUrl,
    },
    ...tradeAPlaneLinks,
    ...craigslistLinks,
    ...facebookLinks,
  ];
}

export default function MarketplaceSearch() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedStates, setSelectedStates] = useState<{ value: string; label: string }[]>([]);
  const [showLinks, setShowLinks] = useState(false);

  const handleSearch = () => setShowLinks(true);
  const handleReset = () => {
    setBrand("");
    setModel("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedStates([]);
    setShowLinks(false);
  };

  const searchLinks = buildSearchLinks({
    brand,
    model,
    minPrice,
    maxPrice,
    selectedStateAbbrs: selectedStates.map(s => s.value),
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-center mb-8">
        <img
          src="/prop.png"
          alt="Propeller"
          className="w-16 h-16 mr-4"
          style={{ objectFit: "contain" }}
        />
        <span className="text-blue-600 text-4xl font-extrabold">
          Sky-Seeker
        </span>
      </header>

      {/* Filter/Search Section */}
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-xl shadow p-6 w-full max-w-md mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Search Every Hangar</h2>
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
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Min Price</label>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    className="border rounded pl-6 pr-2 py-1 w-full"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    type="number"
                    min="0"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1">Max Price</label>
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    className="border rounded pl-6 pr-2 py-1 w-full"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    type="number"
                    min="0"
                    placeholder="100000"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">State(s):</label>
              <Select
                options={STATE_OPTIONS}
                value={selectedStates}
                onChange={opts => setSelectedStates(opts as { value: string; label: string }[])}
                isMulti
                isSearchable
                placeholder="Select state(s)..."
                className="w-full"
                classNamePrefix="react-select"
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
              />
              {selectedStates.length === 0 ? (
                <div className="text-xs text-yellow-600 mt-1 font-semibold">
                  Heads Up, Captain!<br />
                  No state selected means we can’t scan your six for local deals on Craigslist or Facebook Marketplace. Plot a course—pick a state!
                </div>
              ) : (
                <div className="text-xs text-gray-500 mt-1">
                  You can search and select multiple states.
                </div>
              )}
            </div>
            <div className="flex gap-3 justify-center mt-2">
              <button
                onClick={handleReset}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition"
                type="button"
              >
                Reset
              </button>
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-bold shadow transition"
                style={{ minWidth: "180px" }}
                type="button"
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
              🛠️ Sky-Seeker Pro Tip: Want actual airplanes, not winged lawn ornaments? Use that min price box!
            </div>
          </section>
        )}
      </div>

      {/* Test for italics */}
      {/* <div className="italic text-red-500">
        This should be italic and red
      </div> */}

      {/* Tailwind test div */}
      {/* <div className="bg-yellow-400 text-4xl italic text-red-500">
        TAILWIND TEST
      </div> */}

      {/* Small print disclaimer */}
      <div className="text-xs text-gray-400 mt-16 text-center font-serif italic">
        Sky-Seeker isn’t partnered with any listing sites—we just help you find the good stuff.
      </div>
    </div>
  );
}