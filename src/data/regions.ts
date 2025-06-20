export type Region = {
  name: string;
  states: string[];
  craigslist: string[]; // Craigslist subdomains
  facebookCities: string[]; // Major city for FB search
};

export const REGIONS: Region[] = [
  {
    name: "Pacific Northwest",
    states: ["WA", "OR", "ID"],
    craigslist: ["seattle", "portland", "boise"],
    facebookCities: ["Seattle, WA", "Portland, OR"],
  },
  {
    name: "Southwest",
    states: ["CA", "NV", "AZ", "NM"],
    craigslist: ["sfbay", "losangeles", "phoenix", "albuquerque", "sandiego", "santabarbara", "inlandempire", "reno", "tucson"],
    facebookCities: ["Los Angeles, CA", "Phoenix, AZ"],
  },
  {
    name: "Rocky Mountains",
    states: ["CO", "UT", "MT", "WY"],
    craigslist: ["denver", "saltlakecity", "bozeman", "wyoming"],
    facebookCities: ["Denver, CO", "Salt Lake City, UT"],
  },
  {
    name: "Midwest",
    states: ["IL", "IN", "IA", "KS", "MI", "MN", "MO", "NE", "ND", "OH", "SD", "WI"],
    craigslist: ["chicago", "detroit", "minneapolis", "stlouis", "kansascity", "cleveland", "columbus", "indianapolis", "milwaukee", "omaha", "siouxfalls", "springfieldil"],
    facebookCities: ["Chicago, IL", "Minneapolis, MN"],
  },
  {
    name: "Northeast",
    states: ["NY", "NJ", "PA", "CT", "MA", "ME", "NH", "RI", "VT"],
    craigslist: ["newyork", "boston", "philadelphia", "pittsburgh", "hartford", "providence", "albany", "maine", "nh", "jerseyshore", "vermont", "worcester", "longisland"],
    facebookCities: ["New York, NY", "Boston, MA"],
  },
  {
    name: "Southeast",
    states: ["FL", "GA", "NC", "SC", "VA", "WV", "AL", "TN", "KY", "MS", "LA", "AR"],
    craigslist: ["miami", "orlando", "atlanta", "charlotte", "raleigh", "richmond", "birmingham", "nashville", "louisville", "neworleans", "jackson", "little rock", "tampa", "norfolk", "savannah", "huntsville", "lexington"],
    facebookCities: ["Atlanta, GA", "Miami, FL"],
  },
  {
    name: "South Central/Texas",
    states: ["TX", "OK"],
    craigslist: ["dallas", "houston", "austin", "sanantonio", "amarillo", "corpuschristi", "oklahomacity", "lubbock", "waco", "elpaso", "beaumont"],
    facebookCities: ["Dallas, TX", "Houston, TX"],
  },
  {
    name: "Alaska/Hawaii",
    states: ["AK", "HI"],
    craigslist: ["anchorage", "fairbanks", "honolulu"],
    facebookCities: ["Anchorage, AK", "Honolulu, HI"],
  },
];
