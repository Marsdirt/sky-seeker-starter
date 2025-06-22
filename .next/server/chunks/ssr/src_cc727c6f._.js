module.exports = {

"[project]/src/data/states.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "STATES": (()=>STATES)
});
const STATES = [
    {
        name: "Alabama",
        abbr: "AL"
    },
    {
        name: "Alaska",
        abbr: "AK"
    },
    {
        name: "Arizona",
        abbr: "AZ"
    },
    {
        name: "Arkansas",
        abbr: "AR"
    },
    {
        name: "California",
        abbr: "CA"
    },
    {
        name: "Colorado",
        abbr: "CO"
    },
    {
        name: "Connecticut",
        abbr: "CT"
    },
    {
        name: "Delaware",
        abbr: "DE"
    },
    {
        name: "Florida",
        abbr: "FL"
    },
    {
        name: "Georgia",
        abbr: "GA"
    },
    {
        name: "Hawaii",
        abbr: "HI"
    },
    {
        name: "Idaho",
        abbr: "ID"
    },
    {
        name: "Illinois",
        abbr: "IL"
    },
    {
        name: "Indiana",
        abbr: "IN"
    },
    {
        name: "Iowa",
        abbr: "IA"
    },
    {
        name: "Kansas",
        abbr: "KS"
    },
    {
        name: "Kentucky",
        abbr: "KY"
    },
    {
        name: "Louisiana",
        abbr: "LA"
    },
    {
        name: "Maine",
        abbr: "ME"
    },
    {
        name: "Maryland",
        abbr: "MD"
    },
    {
        name: "Massachusetts",
        abbr: "MA"
    },
    {
        name: "Michigan",
        abbr: "MI"
    },
    {
        name: "Minnesota",
        abbr: "MN"
    },
    {
        name: "Mississippi",
        abbr: "MS"
    },
    {
        name: "Missouri",
        abbr: "MO"
    },
    {
        name: "Montana",
        abbr: "MT"
    },
    {
        name: "Nebraska",
        abbr: "NE"
    },
    {
        name: "Nevada",
        abbr: "NV"
    },
    {
        name: "New Hampshire",
        abbr: "NH"
    },
    {
        name: "New Jersey",
        abbr: "NJ"
    },
    {
        name: "New Mexico",
        abbr: "NM"
    },
    {
        name: "New York",
        abbr: "NY"
    },
    {
        name: "North Carolina",
        abbr: "NC"
    },
    {
        name: "North Dakota",
        abbr: "ND"
    },
    {
        name: "Ohio",
        abbr: "OH"
    },
    {
        name: "Oklahoma",
        abbr: "OK"
    },
    {
        name: "Oregon",
        abbr: "OR"
    },
    {
        name: "Pennsylvania",
        abbr: "PA"
    },
    {
        name: "Rhode Island",
        abbr: "RI"
    },
    {
        name: "South Carolina",
        abbr: "SC"
    },
    {
        name: "South Dakota",
        abbr: "SD"
    },
    {
        name: "Tennessee",
        abbr: "TN"
    },
    {
        name: "Texas",
        abbr: "TX"
    },
    {
        name: "Utah",
        abbr: "UT"
    },
    {
        name: "Vermont",
        abbr: "VT"
    },
    {
        name: "Virginia",
        abbr: "VA"
    },
    {
        name: "Washington",
        abbr: "WA"
    },
    {
        name: "West Virginia",
        abbr: "WV"
    },
    {
        name: "Wisconsin",
        abbr: "WI"
    },
    {
        name: "Wyoming",
        abbr: "WY"
    }
];
}}),
"[project]/src/data/craigslistByState.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Sample mapping for a few states; expand this with all Craigslist subdomains as needed
__turbopack_context__.s({
    "CRAIGSLIST_CITIES_BY_STATE": (()=>CRAIGSLIST_CITIES_BY_STATE)
});
const CRAIGSLIST_CITIES_BY_STATE = {
    CA: [
        {
            city: "Los Angeles",
            subdomain: "losangeles"
        },
        {
            city: "SF Bay Area",
            subdomain: "sfbay"
        },
        {
            city: "San Diego",
            subdomain: "sandiego"
        },
        {
            city: "Sacramento",
            subdomain: "sacramento"
        },
        {
            city: "Fresno",
            subdomain: "fresno"
        },
        {
            city: "Inland Empire",
            subdomain: "inlandempire"
        },
        {
            city: "Orange County",
            subdomain: "orangecounty"
        },
        {
            city: "Ventura",
            subdomain: "ventura"
        },
        {
            city: "Bakersfield",
            subdomain: "bakersfield"
        },
        {
            city: "San Luis Obispo",
            subdomain: "slo"
        }
    ],
    WA: [
        {
            city: "Seattle-Tacoma",
            subdomain: "seattle"
        },
        {
            city: "Spokane",
            subdomain: "spokane"
        },
        {
            city: "Olympic Peninsula",
            subdomain: "olympic"
        },
        {
            city: "Bellingham",
            subdomain: "bellingham"
        },
        {
            city: "Yakima",
            subdomain: "yakima"
        }
    ],
    TX: [
        {
            city: "Austin",
            subdomain: "austin"
        },
        {
            city: "Dallas/Fort Worth",
            subdomain: "dallas"
        },
        {
            city: "Houston",
            subdomain: "houston"
        },
        {
            city: "San Antonio",
            subdomain: "sanantonio"
        },
        {
            city: "Corpus Christi",
            subdomain: "corpuschristi"
        },
        {
            city: "El Paso",
            subdomain: "elpaso"
        }
    ]
};
}}),
"[project]/src/data/facebookByState.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Sample mapping for a few states; expand this with all major Facebook Marketplace cities as needed
__turbopack_context__.s({
    "FACEBOOK_CITIES_BY_STATE": (()=>FACEBOOK_CITIES_BY_STATE)
});
const FACEBOOK_CITIES_BY_STATE = {
    CA: [
        "Los Angeles, California",
        "San Francisco, California",
        "San Diego, California",
        "Sacramento, California",
        "Fresno, California",
        "Irvine, California"
    ],
    WA: [
        "Seattle, Washington",
        "Tacoma, Washington",
        "Spokane, Washington",
        "Bellevue, Washington"
    ],
    TX: [
        "Austin, Texas",
        "Dallas, Texas",
        "Houston, Texas",
        "San Antonio, Texas"
    ]
};
}}),
"[project]/src/components/MarketplaceSearch.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/components/MarketplaceSearch.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=src_cc727c6f._.js.map