// This is a mapping from state abbreviation to Craigslist city subdomains for that state.
// You can expand or refine this mapping as needed for your app.

export const CRAIGSLIST_CITIES_BY_STATE: Record<string, {city: string, subdomain: string}[]> = {
  CA: [
    { city: "Los Angeles", subdomain: "losangeles" },
    { city: "SF Bay Area", subdomain: "sfbay" },
    { city: "San Diego", subdomain: "sandiego" },
    { city: "Sacramento", subdomain: "sacramento" },
    { city: "Fresno", subdomain: "fresno" },
    { city: "Inland Empire", subdomain: "inlandempire" },
    { city: "Orange County", subdomain: "orangecounty" },
    { city: "Ventura", subdomain: "ventura" },
    { city: "Bakersfield", subdomain: "bakersfield" },
    { city: "San Luis Obispo", subdomain: "slo" },
    // add more as needed...
  ],
  WA: [
    { city: "Seattle-Tacoma", subdomain: "seattle" },
    { city: "Spokane", subdomain: "spokane" },
    { city: "Olympic Peninsula", subdomain: "olympic" },
    { city: "Bellingham", subdomain: "bellingham" },
    { city: "Yakima", subdomain: "yakima" },
    // add more as needed...
  ],
  // ...add all states and their Craigslist subdomains
};
