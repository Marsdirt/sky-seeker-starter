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
  // If only brand is provided and model is empty, use keyword search for off-brands
  const isOffBrand = !!brand && !model;
  const params = [
    `headline=`,
    `body=`,
    `part_num=`,
    `mfg=${isOffBrand ? "" : encodeURIComponent(brand || "")}`,
    `model=${isOffBrand ? "" : encodeURIComponent(model || "")}`,
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
    `keyword=${isOffBrand ? encodeURIComponent(brand) : ""}`,
    `search_type=${isOffBrand ? "keyword" : "advanced"}`,
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

function makeAeroTraderUrl({
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
  zip?: string;
  distance?: number;
}) {
  const brandCode = AEROTRADER_BRAND_CODES[brand.trim()];
  let url = "https://www.aerotrader.com/aircraft-for-sale?";

  // If brand is mapped, use make=Brand|Code and keyword=model
  if (brand && brandCode) {
    url += `make=${encodeURIComponent(brand)}%7C${brandCode}&`;
    if (model) url += `keyword=${encodeURIComponent(model)}&`;
  } else {
    // If brand is not mapped, put brand+model in keyword
    const keyword = [brand, model].filter(Boolean).join(" ");
    if (keyword) url += `keyword=${encodeURIComponent(keyword)}&`;
  }

  if (minPrice || maxPrice) url += `price=${encodeURIComponent(`${minPrice || ""}:${maxPrice || ""}`)}&`;
  if (zip && distance) url += `zip=${encodeURIComponent(zip)}&radius=${distance}&`;
  return url.replace(/[&?]+$/, "");
}

function makeGlobalAirUrl({
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
  const searchTerms = [brand, model].filter(Boolean).join(" ");
  const locationCodes = stateAbbrs
    .map(abbr => GLOBALAIR_STATE_CODES[abbr])
    .filter(Boolean)
    .join(",");
  let url = `https://www.globalair.com/aircraft-for-sale/${encodeURIComponent(searchTerms)}?`;
  if (minPrice) url += `lowprice=${encodeURIComponent(minPrice)}&`;
  if (maxPrice) url += `highprice=${encodeURIComponent(maxPrice)}&`;
  url += "lowyear=&highyear=&lowtt=&hightt=&";
  if (locationCodes) url += `locations=${locationCodes},&`;
  // selclass left blank for broad search
  return url.replace(/[&?]+$/, "");
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
            distance: 350, // changed from 500 to 350
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

  // AeroTrader: nationwide if no state, else one link per selected state
  let aeroTraderLinks: { name: string; url: string }[] = [];
  if (stateAbbrs.length === 0) {
    aeroTraderLinks = [
      {
        name: "AeroTrader (Nationwide)",
        url: makeAeroTraderUrl({
          brand,
          model,
          minPrice,
          maxPrice,
          zip: "80014",      // Denver area code
          distance: 10000,   // Nationwide radius
        }),
      },
    ];
  } else {
    // AeroTrader: state-based search
    aeroTraderLinks = stateAbbrs
      .filter(abbr => CRAIGSLIST_STATE_CITIES[abbr])
      .map(abbr => {
        const { zip } = CRAIGSLIST_STATE_CITIES[abbr];
        return {
          name: `AeroTrader (${abbrToName[abbr]})`,
          url: makeAeroTraderUrl({
            brand,
            model,
            minPrice,
            maxPrice,
            zip,
            distance: 350, // changed from 500 to 350
          }),
        };
      });
  }

  // GlobalAir: one link per selected state
  const globalAirUrl = makeGlobalAirUrl({
    brand,
    model,
    minPrice,
    maxPrice,
    stateAbbrs,
  });

  // ASO mapping table (brand/model to mg_id)
  const ASO_MAPPINGS: Array<{ mg_id: number; brand: string; models: string[] }> = [
    // --- BEGIN FULL MAPPING LIST ---
    { mg_id: 1, brand: "misc", models: [] },
    { mg_id: 2, brand: "beech", models: ["baron"] },
    { mg_id: 3, brand: "beech", models: ["35", "v 35 bonanza"] },
    { mg_id: 4, brand: "beech", models: ["king air 90"] },
    { mg_id: 5, brand: "american champion", models: [] },
    { mg_id: 5, brand: "citabria", models: ["citabria"] },
    { mg_id: 6, brand: "cessna", models: ["citation"] },
    { mg_id: 8, brand: "piper", models: ["cherokee six"] },
    { mg_id: 9, brand: "piper", models: ["cheyenne"] },
    { mg_id: 11, brand: "piper", models: ["pacer", "tri-pacer"] },
    { mg_id: 12, brand: "piper", models: ["malibu"] },
    { mg_id: 13, brand: "piper", models: ["navajo"] },
    { mg_id: 14, brand: "piper", models: ["aztec", "geronimo", "apache"] },
    { mg_id: 15, brand: "piper", models: ["seneca"] },
    { mg_id: 16, brand: "beech", models: ["queen air"] },
    { mg_id: 17, brand: "beech", models: ["sundowner", "musketeer"] },
    { mg_id: 18, brand: "beechjet", models: ["400"] },
    { mg_id: 19, brand: "cessna", models: ["441 conquest", "425 conquest"] },
    { mg_id: 20, brand: "cessna", models: ["208 caravan"] },
    { mg_id: 21, brand: "cessna", models: ["150", "152"] },
    { mg_id: 22, brand: "cessna", models: ["172", "skyhawk"] },
    { mg_id: 23, brand: "cessna", models: ["177", "cardinal"] },
    { mg_id: 24, brand: "cessna", models: ["182", "skylane"] },
    { mg_id: 25, brand: "cessna", models: ["185", "180"] },
    { mg_id: 26, brand: "cessna", models: ["l19 birddog"] },
    { mg_id: 27, brand: "cessna", models: ["205", "206", "u206", "207"] },
    { mg_id: 28, brand: "cessna", models: ["210 centurion"] },
    { mg_id: 29, brand: "cessna", models: ["303 crusader"] },
    { mg_id: 30, brand: "cessna", models: ["401", "411"] },
    { mg_id: 32, brand: "beech", models: ["skipper"] },
    { mg_id: 33, brand: "beech", models: ["f33 bonanza", "b33 bonanza", "debonair"] },
    { mg_id: 34, brand: "beech", models: ["g36 bonanza", "a36 bonanza"] },
    { mg_id: 35, brand: "beech", models: ["18"] },
    { mg_id: 36, brand: "beech", models: ["duchess"] },
    { mg_id: 37, brand: "beech", models: ["twin bonanza"] },
    { mg_id: 38, brand: "beech", models: ["1900"] },
    { mg_id: 39, brand: "beech", models: ["99"] },
    { mg_id: 40, brand: "beech", models: ["starship"] },
    { mg_id: 41, brand: "beech", models: ["t34 mentor"] },
    { mg_id: 42, brand: "piper", models: ["cub", "super cruiser"] },
    { mg_id: 44, brand: "piper", models: ["pawnee", "brave"] },
    { mg_id: 45, brand: "piper", models: ["tomahawk"] },
    { mg_id: 46, brand: "piper", models: ["comanche"] },
    { mg_id: 47, brand: "piper", models: ["seminole"] },
    { mg_id: 48, brand: "piper", models: ["twin comanche"] },
    { mg_id: 49, brand: "piper", models: ["archer"] },
    { mg_id: 50, brand: "piper", models: ["arrow"] },
    { mg_id: 51, brand: "piper", models: ["dakota"] },
    { mg_id: 52, brand: "piper", models: ["warrior"] },
    { mg_id: 53, brand: "beech", models: ["king air 100"] },
    { mg_id: 54, brand: "beech", models: ["king air b200", "200"] },
    { mg_id: 55, brand: "beech", models: ["king air 300", "350"] },
    { mg_id: 56, brand: "piper", models: ["saratoga", "6x", "6xt"] },
    { mg_id: 57, brand: "cessna", models: ["175", "skylark"] },
    { mg_id: 58, brand: "cessna", models: ["citation x"] },
    { mg_id: 59, brand: "cessna", models: ["citation v", "citation ultra", "citation encore"] },
    { mg_id: 60, brand: "cessna", models: ["citation iii", "citation vi", "citation vii"] },
    { mg_id: 61, brand: "cessna", models: ["citation ii", "citation iisp", "citation bravo"] },
    { mg_id: 62, brand: "cessna", models: ["citationjet cj"] },
    { mg_id: 63, brand: "british aerospace", models: ["jetstream"] },
    { mg_id: 64, brand: "british aerospace", models: ["146"] },
    { mg_id: 65, brand: "airbus", models: ["a300", "a310"] },
    { mg_id: 66, brand: "airbus", models: ["a318", "a320", "a321"] },
    { mg_id: 68, brand: "british aerospace", models: ["avro rj"] },
    { mg_id: 69, brand: "beech", models: ["duke", "b60"] },
    { mg_id: 70, brand: "aero commander", models: ["iai westwind"] },
    { mg_id: 71, brand: "gulfstream", models: ["g100", "astra"] },
    { mg_id: 72, brand: "iai", models: ["jet commander"] },
    { mg_id: 73, brand: "beech", models: ["travel air"] },
    { mg_id: 74, brand: "cessna", models: ["310", "320"] },
    { mg_id: 75, brand: "cessna", models: ["336", "337", "skymaster"] },
    { mg_id: 76, brand: "cessna", models: ["335", "340"] },
    { mg_id: 77, brand: "cessna", models: ["402", "404"] },
    { mg_id: 78, brand: "cessna", models: ["414", "414a", "414 ram"] },
    { mg_id: 79, brand: "cessna", models: ["421"] },
    { mg_id: 80, brand: "piper", models: ["super cub"] },
    { mg_id: 81, brand: "bombardier", models: ["challenger"] },
    { mg_id: 82, brand: "bombardier", models: ["rj"] },
    { mg_id: 83, brand: "bombardier", models: ["global"] },
    { mg_id: 84, brand: "cessna", models: ["120", "140"] },
    { mg_id: 85, brand: "cessna", models: ["170"] },
    { mg_id: 86, brand: "cessna", models: ["190", "195"] },
    { mg_id: 87, brand: "cessna", models: ["citation sovereign"] },
    { mg_id: 88, brand: "piper", models: ["lance"] },
    { mg_id: 89, brand: "diamond", models: ["da20"] },
    { mg_id: 90, brand: "bae", models: ["atp"] },
    { mg_id: 91, brand: "boeing", models: ["707", "720"] },
    { mg_id: 92, brand: "boeing", models: ["777"] },
    { mg_id: 93, brand: "boeing", models: ["727"] },
    { mg_id: 94, brand: "boeing", models: ["737"] },
    { mg_id: 95, brand: "boeing", models: ["747"] },
    { mg_id: 96, brand: "boeing", models: ["757"] },
    { mg_id: 97, brand: "boeing", models: ["767"] },
    { mg_id: 98, brand: "boeing", models: ["bbj"] },
    { mg_id: 100, brand: "mcdonnell douglas", models: ["md-90"] },
    { mg_id: 101, brand: "mcdonnell douglas", models: ["220"] },
    { mg_id: 102, brand: "mcdonnell douglas", models: ["helicopter"] },
    { mg_id: 104, brand: "mcdonnell douglas", models: ["dc-3"] },
    { mg_id: 105, brand: "mcdonnell douglas", models: ["dc-4"] },
    { mg_id: 106, brand: "mcdonnell douglas", models: ["dc-6"] },
    { mg_id: 107, brand: "mcdonnell douglas", models: ["dc-8"] },
    { mg_id: 108, brand: "mcdonnell douglas", models: ["dc-9", "md-80"] },
    { mg_id: 109, brand: "mcdonnell douglas", models: ["dc-10", "md-11"] },
    { mg_id: 111, brand: "beech", models: ["baron 56"] },
    { mg_id: 112, brand: "beech", models: ["baron 58", "g58", "58p"] },
    { mg_id: 113, brand: "boeing", models: ["717"] },
    { mg_id: 114, brand: "diamond", models: ["da40 star"] },
    { mg_id: 115, brand: "piper", models: ["meridian"] },
    { mg_id: 116, brand: "learjet", models: ["23", "24"] },
    { mg_id: 116, brand: "lear", models: ["23", "24"] },
    { mg_id: 117, brand: "learjet", models: ["25", "28", "29"] },
    { mg_id: 117, brand: "lear", models: ["25", "28", "29"] },
    { mg_id: 118, brand: "learjet", models: ["31"] },
    { mg_id: 118, brand: "lear", models: ["31"] },
    { mg_id: 119, brand: "learjet", models: ["35", "36"] },
    { mg_id: 119, brand: "lear", models: ["35", "36"] },
    { mg_id: 120, brand: "learjet", models: ["55", "60", "65"] },
    { mg_id: 120, brand: "lear", models: ["55", "60", "65"] },
    { mg_id: 121, brand: "cessna", models: ["caravan ii"] },
    { mg_id: 122, brand: "iai", models: ["galaxy"] },
    { mg_id: 123, brand: "moraine solnier", models: ["paris jet"] },
    { mg_id: 124, brand: "gulfstream", models: ["g-1"] },
    { mg_id: 125, brand: "gulfstream", models: ["gii", "giii"] },
    { mg_id: 126, brand: "gulfstream", models: ["g100", "g150", "g200"] },
    { mg_id: 127, brand: "beech", models: ["premier"] },
    { mg_id: 128, brand: "diamond", models: ["powered glider"] },
    { mg_id: 129, brand: "diamond", models: ["da42 twinstar"] },
    { mg_id: 130, brand: "gulfstream", models: ["giv", "givsp", "g300", "g350", "g400", "g450"] },
    { mg_id: 131, brand: "gulfstream", models: ["gv", "g500", "g550"] },
    { mg_id: 132, brand: "bombardier", models: ["challenger 600", "601", "604", "605"] },
    { mg_id: 133, brand: "falcon", models: ["10", "100"] },
    { mg_id: 134, brand: "falcon", models: ["20", "200"] },
    { mg_id: 135, brand: "falcon", models: ["50"] },
    { mg_id: 136, brand: "falcon", models: ["900", "900b", "900c", "900dx"] },
    { mg_id: 137, brand: "falcon", models: ["2000"] },
    { mg_id: 138, brand: "diamond", models: ["d-jet"] },
    { mg_id: 139, brand: "learjet", models: ["40", "45"] },
    { mg_id: 139, brand: "lear", models: ["40", "45"] },
    { mg_id: 140, brand: "piper", models: ["jetprop"] },
    { mg_id: 142, brand: "falcon", models: ["7x"] },
    { mg_id: 143, brand: "zenith", models: ["alarus"] },
    { mg_id: 147, brand: "glasair", models: ["glastar"] },
    { mg_id: 148, brand: "cessna", models: ["citation mustang"] },
    { mg_id: 150, brand: "zodiac", models: ["zodiac aircraft"] },
    { mg_id: 151, brand: "diamond", models: ["da50 superstar"] },
    { mg_id: 152, brand: "beech", models: ["bonanza turbine"] },
    { mg_id: 153, brand: "flight design", models: ["ctsw"] },
    { mg_id: 154, brand: "beech", models: ["snb"] },
    { mg_id: 155, brand: "gobosh", models: ["700"] },
    { mg_id: 156, brand: "indy aircraft", models: ["t-bird"] },
    { mg_id: 157, brand: "cessna", models: ["350", "400"] },
    { mg_id: 158, brand: "porterfield", models: ["fp-65"] },
    { mg_id: 160, brand: "cessna", models: ["citation excel", "xls"] },
    { mg_id: 161, brand: "cessna", models: ["citation columbus"] },
    { mg_id: 163, brand: "airbus", models: ["a330", "a340"] },
    { mg_id: 164, brand: "airbus", models: ["acj"] },
    { mg_id: 165, brand: "rockwell", models: ["100"] },
    { mg_id: 166, brand: "rockwell", models: ["100-180"] },
    { mg_id: 168, brand: "cessna", models: ["180"] },
    { mg_id: 169, brand: "cessna", models: ["185 skywagon"] },
    { mg_id: 170, brand: "rockwell", models: ["200"] },
    { mg_id: 171, brand: "mooney", models: ["m20"] },
    { mg_id: 184, brand: "mooney", models: ["m20"] },
    { mg_id: 185, brand: "american champion", models: ["scout"] },
    { mg_id: 187, brand: "piper", models: ["aerostar"] },
    { mg_id: 188, brand: "grumman", models: [] },
    { mg_id: 189, brand: "air tractor", models: ["air tractor"] },
    { mg_id: 190, brand: "erco", models: ["forney", "alon"] },
    { mg_id: 191, brand: "cessna", models: ["airmaster"] },
    { mg_id: 192, brand: "gippsaero", models: [] },
    { mg_id: 193, brand: "american legend", models: [] },
    { mg_id: 194, brand: "antonov", models: [] },
    { mg_id: 195, brand: "piper", models: ["apache", "geronimo"] },
    { mg_id: 198, brand: "avion", models: ["robin"] },
    { mg_id: 199, brand: "piper", models: ["aztec"] },
    { mg_id: 200, brand: "beagle", models: [] },
    { mg_id: 201, brand: "dehavilland", models: [] },
    { mg_id: 202, brand: "beech", models: ["18"] },
    { mg_id: 203, brand: "beech", models: ["bonanza v35"] },
    { mg_id: 206, brand: "mooney", models: ["cadet", "mite"] },
    { mg_id: 207, brand: "avions mudry", models: [] },
    { mg_id: 209, brand: "grumman american", models: [] },
    { mg_id: 210, brand: "piper", models: ["cherokee", "140", "150", "160", "cherokee 140", "cherokee 150", "cherokee 160", ""] },
    { mg_id: 213, brand: "piper", models: ["cherokee 180", "180"] },
    { mg_id: 214, brand: "piper", models: ["cherokee 235", "235"] },
    { mg_id: 216, brand: "christen", models: [] },
    { mg_id: 217, brand: "piper", models: ["clipper", "vagabond"] },
    { mg_id: 218, brand: "commander", models: [] },
    { mg_id: 220, brand: "helio", models: [] },
    { mg_id: 221, brand: "bellanca", models: [] },
    { mg_id: 226, brand: "diamond", models: ["da42"] },
    { mg_id: 228, brand: "eagle aircraft", models: [] },
    { mg_id: 237, brand: "extra", models: [] },
    { mg_id: 239, brand: "funk", models: [] },
    { mg_id: 240, brand: "great lakes", models: [] },
    { mg_id: 241, brand: "grob", models: [] },
    { mg_id: 242, brand: "aviat", models: [] },
    { mg_id: 243, brand: "britten norman", models: [] },
    { mg_id: 244, brand: "varga", models: [] },
    { mg_id: 246, brand: "liberty aerospace", models: [] },
    { mg_id: 247, brand: "luscombe", models: [] },
    { mg_id: 249, brand: "maule", models: [] },
    { mg_id: 255, brand: "piper", models: ["malibu", "mirage", "matrix"] },
    { mg_id: 256, brand: "mooney", models: ["m20"] },
    { mg_id: 278, brand: "cessna", models: ["p210"] },
    { mg_id: 279, brand: "piper", models: ["pacer", "tri-pacer", "colt"] },
    { mg_id: 283, brand: "pitts", models: [] },
    { mg_id: 285, brand: "pzl", models: ["pzl-104"] },
    { mg_id: 287, brand: "ruschmeyer", models: [] },
    { mg_id: 289, brand: "siai marchetti", models: [] },
    { mg_id: 292, brand: "cirrus", models: ["sr20"] },
    { mg_id: 293, brand: "cirrus", models: ["sr22"] },
    { mg_id: 299, brand: "swift", models: [] },
    { mg_id: 300, brand: "socata", models: [] },
    { mg_id: 301, brand: "taylorcraft", models: [] },
    { mg_id: 302, brand: "ayres", models: [] },
    { mg_id: 310, brand: "transavia", models: [] },
    { mg_id: 318, brand: "waco", models: [] },
    { mg_id: 319, brand: "waetherly", models: [] },
    { mg_id: 320, brand: "wing", models: [] },
    { mg_id: 322, brand: "zlin", models: [] },
    { mg_id: 324, brand: "alarus", models: [] },
    { mg_id: 325, brand: "aeronca", models: [] },
    { mg_id: 330, brand: "aircoupe", models: [] },
    { mg_id: 341, brand: "emstrom", models: [] },
    { mg_id: 342, brand: "eurocopter", models: [] },
    { mg_id: 343, brand: "swearingen", models: ["fairchild"] },
    { mg_id: 347, brand: "hawker", models: [] },
    { mg_id: 348, brand: "hiller", models: [] },
    { mg_id: 349, brand: "hughes", models: [] },
    { mg_id: 351, brand: "lockheed", models: [] },
    { mg_id: 355, brand: "mitsubishi", models: [] },
    { mg_id: 357, brand: "navion", models: [] },
    { mg_id: 358, brand: "north american", models: [] },
    { mg_id: 359, brand: "partenavia", models: [] },
    { mg_id: 360, brand: "piaggio", models: [] },
    { mg_id: 361, brand: "pilatus", models: [] },
    { mg_id: 363, brand: "republic", models: [] },
    { mg_id: 364, brand: "robinson", models: [] },
    { mg_id: 366, brand: "sabreliner", models: [] },
    { mg_id: 367, brand: "schweizer", models: [] },
    { mg_id: 368, brand: "shorts", models: [] },
    { mg_id: 369, brand: "sikorski", models: [] },
    { mg_id: 370, brand: "stinson", models: [] },
    { mg_id: 371, brand: "swift", models: [] },
    { mg_id: 373, brand: "yak", models: [] },
    { mg_id: 374, brand: "glasair", models: [] },
    { mg_id: 375, brand: "nomad", models: [] },
    { mg_id: 376, brand: "tupolev", models: [] },
    { mg_id: 377, brand: "ilyushun", models: [] },
    { mg_id: 378, brand: "vought", models: [] },
    { mg_id: 381, brand: "bac", models: [] },
    { mg_id: 382, brand: "casa", models: [] },
    { mg_id: 385, brand: "atr", models: [] },
    { mg_id: 387, brand: "sukhoi", models: [] },
    { mg_id: 388, brand: "saab", models: [] },
    { mg_id: 389, brand: "beriev", models: [] },
    { mg_id: 390, brand: "kamov", models: [] },
    { mg_id: 391, brand: "mil", models: [] },
    { mg_id: 393, brand: "pzl", models: [] },
    { mg_id: 394, brand: "namc", models: [] },
    { mg_id: 395, brand: "domier", models: [] },
    { mg_id: 396, brand: "lancair", models: [] },
    { mg_id: 398, brand: "fairchild", models: [] },
    { mg_id: 400, brand: "aero commander", models: [] },
    { mg_id: 401, brand: "conviar", models: [] },
    { mg_id: 405, brand: "brantly", models: [] },
    { mg_id: 408, brand: "mig", models: [] },
    { mg_id: 409, brand: "fouga", models: [] },
    { mg_id: 411, brand: "quicksilver", models: [] },
    { mg_id: 412, brand: "murphy", models: [] },
    { mg_id: 413, brand: "vans", models: ["rv"] },
    { mg_id: 414, brand: "spezio", models: [] },
    { mg_id: 415, brand: "nanchang", models: [] },
    { mg_id: 417, brand: "kawasaki", models: [] },
    { mg_id: 419, brand: "visionair", models: [] },
    { mg_id: 420, brand: "gaf", models: [] },
    { mg_id: 421, brand: "cirrus", models: [] },
    { mg_id: 425, brand: "spartan", models: [] },
    { mg_id: 427, brand: "meyers", models: [] },
    { mg_id: 430, brand: "maverick", models: [] },
    { mg_id: 431, brand: "focke wulf", models: [] },
    { mg_id: 432, brand: "adam", models: [] },
    { mg_id: 433, brand: "eclipse", models: [] },
    { mg_id: 434, brand: "wittman", models: [] },
    { mg_id: 435, brand: "velocity", models: [] },
    { mg_id: 436, brand: "thorp", models: [] },
    { mg_id: 437, brand: "sonex", models: [] },
    { mg_id: 438, brand: "seawind", models: [] },
    { mg_id: 439, brand: "rutan", models: [] },
    { mg_id: 440, brand: "rans", models: [] },
    { mg_id: 441, brand: "quickie", models: [] },
    { mg_id: 442, brand: "pulsar", models: [] },
    { mg_id: 443, brand: "kitfox", models: [] },
    { mg_id: 444, brand: "harmon rocket", models: [] },
    { mg_id: 445, brand: "bede", models: [] },
    { mg_id: 446, brand: "breezy", models: [] },
    { mg_id: 447, brand: "bushby", models: [] },
    { mg_id: 448, brand: "cozy", models: [] },
    { mg_id: 449, brand: "bucker", models: [] },
    { mg_id: 450, brand: "steen", models: [] },
    { mg_id: 451, brand: "falco", models: [] },
    { mg_id: 452, brand: "sligsby", models: [] },
    { mg_id: 453, brand: "evektor", models: [] },
    { mg_id: 454, brand: "quasar", models: [] },
    { mg_id: 455, brand: "aerocar", models: [] },
    { mg_id: 456, brand: "rotorway", models: [] },
    { mg_id: 458, brand: "scottish aviation", models: [] },
    { mg_id: 459, brand: "quest", models: [] },
    { mg_id: 460, brand: "cubcrafters", models: [] },
    { mg_id: 460, brand: "cub crafters", models: [] },
    { mg_id: 461, brand: "tl ultralight", models: [] },
    { mg_id: 462, brand: "nord aviation", models: [] },
    { mg_id: 463, brand: "westland", models: [] },
    { mg_id: 464, brand: "howard", models: [] },
    { mg_id: 465, brand: "naval aircraft factory", models: [] },
    // --- END FULL MAPPING LIST ---
  ];

  function getAsoMgId(brand: string, model: string): number | null {
    const b = brand.trim().toLowerCase();
    const m = model.trim().toLowerCase();
    // 1. Try to match brand+model mapping first
    for (const entry of ASO_MAPPINGS) {
      if (b === entry.brand && entry.models.length > 0) {
        for (const mod of entry.models) {
          if (mod === "" && m === "") return entry.mg_id;
          if (m.includes(mod)) return entry.mg_id;
        }
      }
    }
    // 2. If no brand+model mapping, try brand-only mapping
    for (const entry of ASO_MAPPINGS) {
      if (b === entry.brand && entry.models.length === 0) {
        return entry.mg_id;
      }
    }
    return null;
  }

  const asoMgId = getAsoMgId(brand, model);
  const asoLinks = asoMgId
    ? [{
        name: "Aircraft Shopper Online (ASO)",
        url: `https://www.aso.com/listings/AircraftListings.aspx?mg_id=${asoMgId}`
      }]
    : [];

  return [
    {
      name: "Barnstormers",
      url: barnstormersUrl,
    },
    ...tradeAPlaneLinks,
    {
      name: "Controller",
      url: controllerUrl,
    },
    ...aeroTraderLinks,
    {
      name: "GlobalAir",
      url: globalAirUrl,
    },
    ...craigslistLinks,
    ...facebookLinks,
    ...asoLinks,
  ];
}

export default function MarketplaceSearch() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedStates, setSelectedStates] = useState<{ value: string; label: string }[]>([]);
  const [showLinks, setShowLinks] = useState(false);
  const [lastClickedUrl, setLastClickedUrl] = useState<string | null>(null);

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

  // ...existing code...
  // Find index of first ASO link
  const firstAsoIdx = searchLinks.findIndex(l => l.name === "Aircraft Shopper Online (ASO)");

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
            {/* ...existing code... */}
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
            {/* ...existing code... */}
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
            {/* ...existing code... */}
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
              {searchLinks.map((link, idx) => (
                <React.Fragment key={link.url || link.name || idx}>
                  {firstAsoIdx === idx && (
                    <li>
                      <div className="text-xs text-blue-700 font-bold text-center my-2">
                        🛸 Heads up! The links above let you filter by price and location. The ASO link below is a wild ride—shows everything, everywhere, all at once. Buckle up!
                      </div>
                    </li>
                  )}
                  {link.url ? (
                    <li>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block rounded-lg px-4 py-2 font-semibold text-center transition
    ${lastClickedUrl === link.url
      ? "bg-yellow-600 text-white ring-4 ring-yellow-300"
      : "bg-yellow-400 hover:bg-yellow-500 text-white"}
  `}
                        onClick={() => setLastClickedUrl(link.url)}
                      >
                        {link.name}
                      </a>
                      {link.note && link.note !== "" && (
                        <div className="text-xs text-red-500 mt-1 text-center">
                          {link.note}
                        </div>
                      )}
                    </li>
                  ) : null}
                </React.Fragment>
              ))}
            </ul>
            <div className="text-xs text-gray-400 mt-4 text-center">
              🛠️ Sky-Seeker Pro Tip: Want actual airplanes, not winged lawn ornaments? Use that min price box!
            </div>
          </section>
        )}
      </div>

      {/* Small print disclaimer */}
      <div className="text-xs text-gray-400 mt-16 text-center font-serif italic">
        Sky-Seeker isn’t partnered with any listing sites—we just help you find the good stuff.
      </div>
    </div>
  );
}

const AEROTRADER_BRAND_CODES: Record<string, string> = {
  Beechcraft: "2236348",
  Aeronca: "2236142",
  Piper: "2239732",
  "Great Lakes": "2238310",
  "American Champion": "2236256",
  Boeing: "2236696",
  Cessna: "2237190",
  "Focke Wulf": "162255852",
  Grumman: "2238364",
  Other: "137947958",
  "Zenair Ltd": "2241342",
  // Add more as needed
};

const GLOBALAIR_STATE_CODES: Record<string, string> = {
  AL: "1",
  AK: "2",
  AZ: "3",
  AR: "4",
  CA: "5",
  CO: "6",
  CT: "7",
  DE: "8",
  FL: "9",
  GA: "10",
  HI: "11",
  ID: "12",
  IL: "13",
  IN: "14",
  IA: "15",
  KS: "16",
  KY: "17",
  LA: "18",
  ME: "19",
  MD: "20",
  MA: "21",
  MI: "22",
  MN: "23",
  MS: "24",
  MO: "25",
  MT: "26",
  NE: "27",
  NV: "28",
  NH: "29",
  NJ: "30",
  NM: "31",
  NY: "32",
  NC: "33",
  ND: "34",
  OH: "35",
  OK: "36",
  OR: "37",
  PA: "38",
  RI: "40",
  SC: "41",
  SD: "42",
  TN: "43",
  TX: "44",
  UT: "45",
  VT: "46",
  VA: "47",
  WA: "48",
  WV: "49",
  WI: "50",
  WY: "51",
};