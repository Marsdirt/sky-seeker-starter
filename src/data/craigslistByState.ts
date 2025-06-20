// Sample mapping for a few states; expand this with all Craigslist subdomains as needed
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
    // Add more as needed...
  ],
  WA: [
    { city: "Seattle-Tacoma", subdomain: "seattle" },
    { city: "Spokane", subdomain: "spokane" },
    { city: "Olympic Peninsula", subdomain: "olympic" },
    { city: "Bellingham", subdomain: "bellingham" },
    { city: "Yakima", subdomain: "yakima" },
    // Add more as needed...
  ],
  TX: [
    { city: "Austin", subdomain: "austin" },
    { city: "Dallas/Fort Worth", subdomain: "dallas" },
    { city: "Houston", subdomain: "houston" },
    { city: "San Antonio", subdomain: "sanantonio" },
    { city: "Corpus Christi", subdomain: "corpuschristi" },
    { city: "El Paso", subdomain: "elpaso" },
    // Add more as needed...
  ],
  // ...add all states/subdomains for full coverage
};
