(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/states.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/craigslistByState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/facebookByState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/states.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$craigslistByState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/craigslistByState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$facebookByState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/facebookByState.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Aircraft Types (with "Projects" added)
const AIRCRAFT_TYPES = [
    {
        value: "",
        label: "All Types"
    },
    {
        value: "Single Engine Piston",
        label: "Single Engine Piston"
    },
    {
        value: "Multi Engine Piston",
        label: "Multi Engine Piston"
    },
    {
        value: "Turboprop",
        label: "Turboprop"
    },
    {
        value: "Jet",
        label: "Jet"
    },
    {
        value: "Helicopter",
        label: "Helicopter"
    },
    {
        value: "Experimental",
        label: "Experimental"
    },
    {
        value: "Light Sport",
        label: "Light Sport"
    },
    {
        value: "Warbird",
        label: "Warbird"
    },
    {
        value: "Glider",
        label: "Glider"
    },
    {
        value: "Amphibious",
        label: "Amphibious"
    },
    {
        value: "Ultralight",
        label: "Ultralight"
    },
    {
        value: "Projects",
        label: "Projects"
    }
];
const STATE_OPTIONS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].map(_c = (s)=>({
        value: s.abbr,
        label: s.name
    }));
_c1 = STATE_OPTIONS;
// Helper functions
function makeBarnstormersUrl({ brand, model, minPrice, maxPrice, stateAbbrs }) {
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
        `keyword=`
    ];
    return "https://www.barnstormers.com/cat_search.php?" + params.join("&");
}
function makeControllerUrl({ brand, model, type, minPrice, maxPrice, stateNames }) {
    const searchTerms = [
        brand,
        model,
        type
    ].filter(Boolean).join(" ");
    let url = `https://www.controller.com/listings/search?keywords=${encodeURIComponent(searchTerms)}`;
    if (minPrice || maxPrice) {
        url += `&Price=${encodeURIComponent(`${minPrice || ""}*${maxPrice || ""}`)}`;
    }
    if (stateNames.length) {
        url += `&State=${encodeURIComponent(stateNames.join("|").toUpperCase())}`;
    }
    return url;
}
function buildSearchLinks({ brand, model, type, minPrice, maxPrice, selectedStateAbbrs }) {
    const abbrToName = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].map((s)=>[
            s.abbr,
            s.name
        ]));
    const stateNames = selectedStateAbbrs.map((abbr)=>abbrToName[abbr]);
    const stateAbbrs = selectedStateAbbrs;
    const craigslistLinks = stateAbbrs.flatMap((abbr)=>(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$craigslistByState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRAIGSLIST_CITIES_BY_STATE"][abbr] || []).map(({ city, subdomain })=>{
            let url = `https://${subdomain}.craigslist.org/search/sss?query=${encodeURIComponent([
                brand,
                model,
                type
            ].filter(Boolean).join(" ") + " aircraft")}`;
            if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
            if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
            return {
                name: `Craigslist (${city})`,
                url,
                note: ""
            };
        }));
    const facebookLinks = stateAbbrs.flatMap((abbr)=>(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$facebookByState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FACEBOOK_CITIES_BY_STATE"][abbr] || []).map((city)=>{
            let fbQuery = [
                brand,
                model,
                type
            ].filter(Boolean).join(" ") + " aircraft";
            if (minPrice || maxPrice) {
                fbQuery += ` $${minPrice || ""}${minPrice && maxPrice ? "-" : ""}${maxPrice || ""}`;
            }
            return {
                name: `Facebook Marketplace (${city})`,
                url: `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(fbQuery)}&location=${encodeURIComponent(city)}`,
                note: minPrice || maxPrice ? "Note: Facebook Marketplace does not support price filters in the URL. Please use the price filter on Facebook." : ""
            };
        }));
    const barnstormersUrl = makeBarnstormersUrl({
        brand,
        model,
        minPrice,
        maxPrice,
        stateAbbrs
    });
    const keyword = [
        brand,
        model,
        type
    ].filter(Boolean).join(" ").trim();
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
    const controllerUrl = makeControllerUrl({
        brand,
        model,
        type,
        minPrice,
        maxPrice,
        stateNames
    });
    return [
        {
            name: "Barnstormers",
            url: barnstormersUrl,
            note: ""
        },
        {
            name: "Trade-A-Plane",
            url: tradeAPlaneUrl,
            note: ""
        },
        {
            name: "Controller",
            url: controllerUrl,
            note: ""
        },
        ...craigslistLinks,
        ...facebookLinks
    ];
}
function HomePage() {
    _s();
    const [brand, setBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // value from AIRCRAFT_TYPES
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedStates, setSelectedStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLinks, setShowLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = ()=>setShowLinks(true);
    const handleReset = ()=>{
        setBrand("");
        setModel("");
        setType("");
        setMinPrice("");
        setMaxPrice("");
        setSelectedStates([]);
        setShowLinks(false);
    };
    const searchLinks = buildSearchLinks({
        brand,
        model,
        type,
        minPrice,
        maxPrice,
        selectedStateAbbrs: selectedStates.map((s)=>s.value)
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-500 text-3xl mr-2",
                        children: "✈️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-600 text-4xl font-extrabold",
                        children: "Sky-Seeker"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow p-6 w-full max-w-md mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-4 text-center",
                                children: "Search Every Hangar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-1",
                                                children: "Brand"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border rounded px-2 py-1 w-full",
                                                value: brand,
                                                onChange: (e)=>setBrand(e.target.value),
                                                placeholder: "e.g. Piper"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-1",
                                                children: "Model"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border rounded px-2 py-1 w-full",
                                                value: model,
                                                onChange: (e)=>setModel(e.target.value),
                                                placeholder: "e.g. Cherokee"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-1",
                                                children: "Aircraft Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                options: AIRCRAFT_TYPES,
                                                value: AIRCRAFT_TYPES.find((t)=>t.value === type) || AIRCRAFT_TYPES[0],
                                                onChange: (o)=>setType(o?.value || ""),
                                                isSearchable: true,
                                                className: "w-full",
                                                classNamePrefix: "react-select"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-semibold mb-1",
                                                        children: "Min Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-2 top-1/2 -translate-y-1/2 text-gray-400",
                                                                children: "$"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "border rounded pl-6 pr-2 py-1 w-full",
                                                                value: minPrice,
                                                                onChange: (e)=>setMinPrice(e.target.value),
                                                                type: "number",
                                                                min: "0",
                                                                placeholder: "0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-semibold mb-1",
                                                        children: "Max Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-2 top-1/2 -translate-y-1/2 text-gray-400",
                                                                children: "$"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                className: "border rounded pl-6 pr-2 py-1 w-full",
                                                                value: maxPrice,
                                                                onChange: (e)=>setMaxPrice(e.target.value),
                                                                type: "number",
                                                                min: "0",
                                                                placeholder: "100000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-1",
                                                children: "State(s):"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                options: STATE_OPTIONS,
                                                value: selectedStates,
                                                onChange: (opts)=>setSelectedStates(opts),
                                                isMulti: true,
                                                isSearchable: true,
                                                placeholder: "Select state(s)...",
                                                className: "w-full",
                                                classNamePrefix: "react-select",
                                                closeMenuOnSelect: false,
                                                hideSelectedOptions: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 mt-1",
                                                children: "You can search and select multiple states."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleReset,
                                                className: "bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition",
                                                type: "button",
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleSearch,
                                                className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-bold shadow transition",
                                                style: {
                                                    minWidth: "180px"
                                                },
                                                type: "button",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    showLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8 bg-white rounded-xl shadow p-6 w-full max-w-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold mb-4 text-center",
                                children: "Search Results on Major Sites"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-3 max-h-[600px] overflow-y-auto",
                                children: searchLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "block bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-2 font-semibold text-center transition",
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 19
                                            }, this),
                                            link.note && link.note !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-red-500 mt-1 text-center",
                                                children: link.note
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, link.url, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mt-4 text-center",
                                children: [
                                    "Craigslist and Facebook links are provided for every major city/metro area in your selected state(s).",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "Facebook Marketplace does not currently support price filters in the search URL; please use the price filter on Facebook after clicking the link."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_s(HomePage, "Y7r+D1EdEnYgGejuCmGQlYi48MI=");
_c2 = HomePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "STATE_OPTIONS$STATES.map");
__turbopack_context__.k.register(_c1, "STATE_OPTIONS");
__turbopack_context__.k.register(_c2, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_cac698d1._.js.map