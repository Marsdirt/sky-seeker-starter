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
"[project]/src/components/MarketplaceSearch.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketplaceSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/states.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// State to Craigslist city/zip mapping
const CRAIGSLIST_STATE_CITIES = {
    AL: {
        city: "clanton",
        zip: "35045",
        subdomain: "bham"
    },
    AK: {
        city: "fairbanks",
        zip: "99701",
        subdomain: "fairbanks"
    },
    AZ: {
        city: "phoenix",
        zip: "85003",
        subdomain: "phoenix"
    },
    AR: {
        city: "littlerock",
        zip: "72201",
        subdomain: "littlerock"
    },
    CA: {
        city: "madera",
        zip: "93637",
        subdomain: "fresno"
    },
    CO: {
        city: "coloradosprings",
        zip: "80903",
        subdomain: "cosprings"
    },
    CT: {
        city: "middletown",
        zip: "06457",
        subdomain: "newhaven"
    },
    DE: {
        city: "dover",
        zip: "19901",
        subdomain: "delaware"
    },
    FL: {
        city: "ocala",
        zip: "34470",
        subdomain: "ocala"
    },
    GA: {
        city: "macon",
        zip: "31201",
        subdomain: "macon"
    },
    HI: {
        city: "hilo",
        zip: "96720",
        subdomain: "hawaii"
    },
    ID: {
        city: "boise",
        zip: "83702",
        subdomain: "boise"
    },
    IL: {
        city: "springfield",
        zip: "62701",
        subdomain: "springfieldil"
    },
    IN: {
        city: "indianapolis",
        zip: "46201",
        subdomain: "indianapolis"
    },
    IA: {
        city: "desmoines",
        zip: "50309",
        subdomain: "desmoines"
    },
    KS: {
        city: "salina",
        zip: "67401",
        subdomain: "salina"
    },
    KY: {
        city: "lexington",
        zip: "40502",
        subdomain: "lexington"
    },
    LA: {
        city: "alexandria",
        zip: "71301",
        subdomain: "cenla"
    },
    ME: {
        city: "bangor",
        zip: "04401",
        subdomain: "maine"
    },
    MD: {
        city: "frederick",
        zip: "21701",
        subdomain: "frederick"
    },
    MA: {
        city: "worcester",
        zip: "01608",
        subdomain: "worcester"
    },
    MI: {
        city: "lansing",
        zip: "48915",
        subdomain: "lansing"
    },
    MN: {
        city: "stcloud",
        zip: "56301",
        subdomain: "stcloud"
    },
    MS: {
        city: "jackson",
        zip: "39201",
        subdomain: "jackson"
    },
    MO: {
        city: "columbia",
        zip: "65201",
        subdomain: "columbiamo"
    },
    MT: {
        city: "lewistown",
        zip: "59457",
        subdomain: "montana"
    },
    NE: {
        city: "grandisland",
        zip: "68801",
        subdomain: "grandisland"
    },
    NV: {
        city: "ely",
        zip: "89301",
        subdomain: "elko"
    },
    NH: {
        city: "concord",
        zip: "03301",
        subdomain: "nh"
    },
    NJ: {
        city: "trenton",
        zip: "08608",
        subdomain: "cnj"
    },
    NM: {
        city: "albuquerque",
        zip: "87102",
        subdomain: "albuquerque"
    },
    NY: {
        city: "utica",
        zip: "13501",
        subdomain: "utica"
    },
    NC: {
        city: "greensboro",
        zip: "27401",
        subdomain: "greensboro"
    },
    ND: {
        city: "bismarck",
        zip: "58501",
        subdomain: "bismarck"
    },
    OH: {
        city: "columbus",
        zip: "43215",
        subdomain: "columbus"
    },
    OK: {
        city: "oklahomacity",
        zip: "73102",
        subdomain: "oklahomocity"
    },
    OR: {
        city: "bend",
        zip: "97701",
        subdomain: "bend"
    },
    PA: {
        city: "harrisburg",
        zip: "17101",
        subdomain: "harrisburg"
    },
    RI: {
        city: "providence",
        zip: "02903",
        subdomain: "providence"
    },
    SC: {
        city: "columbia",
        zip: "29201",
        subdomain: "columbia"
    },
    SD: {
        city: "pierre",
        zip: "57501",
        subdomain: "sd"
    },
    TN: {
        city: "cookeville",
        zip: "38501",
        subdomain: "nashville"
    },
    TX: {
        city: "abilene",
        zip: "79601",
        subdomain: "abilene"
    },
    UT: {
        city: "saltlakecity",
        zip: "84111",
        subdomain: "saltlakecity"
    },
    VT: {
        city: "montpelier",
        zip: "05602",
        subdomain: "vermont"
    },
    VA: {
        city: "richmond",
        zip: "23219",
        subdomain: "richmond"
    },
    WA: {
        city: "ellensburg",
        zip: "98926",
        subdomain: "kpr"
    },
    WV: {
        city: "charleston",
        zip: "25301",
        subdomain: "charlestonwv"
    },
    WI: {
        city: "stevenspoint",
        zip: "54481",
        subdomain: "wausau"
    },
    WY: {
        city: "casper",
        zip: "82601",
        subdomain: "wyoming"
    }
};
// Facebook Marketplace region codes by state (leave out Hawaii)
const FACEBOOK_REGION_CODES = {
    AZ: "109546952404225",
    NM: "109546952404225",
    NV: "109546952404225",
    UT: "109546952404225",
    CA: "109546952404225",
    WA: "113093802034968",
    OR: "113093802034968",
    ID: "113093802034968",
    AK: "113093802034968",
    TX: "105590109474550",
    CO: "106084172755635",
    MT: "106084172755635",
    WY: "106084172755635",
    AL: "105701396129318",
    AR: "105701396129318",
    GA: "105701396129318",
    KY: "105701396129318",
    LA: "105701396129318",
    MS: "105701396129318",
    NC: "105701396129318",
    SC: "105701396129318",
    TN: "105701396129318",
    VA: "105701396129318",
    WV: "105701396129318",
    IL: "108018822553353",
    IN: "108018822553353",
    IA: "108018822553353",
    KS: "108018822553353",
    MI: "108018822553353",
    MN: "108018822553353",
    MO: "108018822553353",
    NE: "108018822553353",
    ND: "108018822553353",
    OH: "108018822553353",
    SD: "108018822553353",
    WI: "108018822553353",
    FL: "113541638659587",
    DE: "107524245944156",
    MD: "107524245944156",
    NJ: "107524245944156",
    NY: "107524245944156",
    PA: "107524245944156",
    CT: "107524245944156",
    ME: "107524245944156",
    MA: "107524245944156",
    NH: "107524245944156",
    RI: "107524245944156",
    VT: "107524245944156",
    DC: "107524245944156"
};
const STATE_OPTIONS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].map(_c = (s)=>({
        value: s.abbr,
        label: s.name
    }));
_c1 = STATE_OPTIONS;
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
function makeControllerUrl({ brand, model, minPrice, maxPrice, stateNames }) {
    const searchTerms = [
        brand,
        model
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
// Trade-A-Plane by state/zip/distance (fixed for server error)
function makeTradeAPlaneUrlByZip({ brand, model, minPrice, maxPrice, zip, distance }) {
    const keyword = [
        brand,
        model
    ].filter(Boolean).join(" ").trim();
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
function makeCraigslistUrl({ subdomain, minPrice, maxPrice, zip, brand, model }) {
    let url = `https://${subdomain}.craigslist.org/search/ava?bundleDuplicates=1`;
    if (maxPrice) url += `&max_price=${encodeURIComponent(maxPrice)}`;
    if (minPrice) url += `&min_price=${encodeURIComponent(minPrice)}`;
    if (zip) url += `&postal=${encodeURIComponent(zip)}`;
    url += `&query=${encodeURIComponent([
        brand,
        model
    ].filter(Boolean).join(" "))}`;
    url += `&search_distance=500&sort=date#search=2~gallery~-1`;
    return url;
}
// Facebook Marketplace builder
function makeFacebookMarketplaceUrl({ regionCode, brand, model, minPrice, maxPrice }) {
    const query = encodeURIComponent([
        brand,
        model,
        "Aircraft"
    ].filter(Boolean).join(" "));
    let url = `https://www.facebook.com/marketplace/${regionCode}/search?query=${query}&exact=false&category_id=1245`;
    if (minPrice) url += `&minPrice=${encodeURIComponent(minPrice)}`;
    if (maxPrice) url += `&maxPrice=${encodeURIComponent(maxPrice)}`;
    return url;
}
function buildSearchLinks({ brand, model, minPrice, maxPrice, selectedStateAbbrs }) {
    const abbrToName = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$states$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].map((s)=>[
            s.abbr,
            s.name
        ]));
    const stateNames = selectedStateAbbrs.map((abbr)=>abbrToName[abbr]);
    const stateAbbrs = selectedStateAbbrs;
    // Barnstormers
    const barnstormersUrl = makeBarnstormersUrl({
        brand,
        model,
        minPrice,
        maxPrice,
        stateAbbrs
    });
    // Controller
    const controllerUrl = makeControllerUrl({
        brand,
        model,
        minPrice,
        maxPrice,
        stateNames
    });
    // Trade-A-Plane: one link per selected state using zip/distance
    const tradeAPlaneLinks = stateAbbrs.filter((abbr)=>CRAIGSLIST_STATE_CITIES[abbr]).map((abbr)=>{
        const { zip } = CRAIGSLIST_STATE_CITIES[abbr];
        return {
            name: `Trade-A-Plane (${abbrToName[abbr]})`,
            url: makeTradeAPlaneUrlByZip({
                brand,
                model,
                minPrice,
                maxPrice,
                zip,
                distance: 500
            })
        };
    });
    // Craigslist: one link per selected state
    const craigslistLinks = stateAbbrs.filter((abbr)=>CRAIGSLIST_STATE_CITIES[abbr]).map((abbr)=>{
        const { city, zip, subdomain } = CRAIGSLIST_STATE_CITIES[abbr];
        return {
            name: `Craigslist (${abbrToName[abbr]})`,
            url: makeCraigslistUrl({
                subdomain,
                minPrice,
                maxPrice,
                zip,
                brand,
                model
            })
        };
    });
    // Facebook Marketplace: one link per selected state (by region)
    const facebookLinks = stateAbbrs.filter((abbr)=>FACEBOOK_REGION_CODES[abbr]).map((abbr)=>({
            name: `Facebook Marketplace (${abbrToName[abbr]})`,
            url: makeFacebookMarketplaceUrl({
                regionCode: FACEBOOK_REGION_CODES[abbr],
                brand,
                model,
                minPrice,
                maxPrice
            })
        }));
    return [
        {
            name: "Barnstormers",
            url: barnstormersUrl
        },
        {
            name: "Controller",
            url: controllerUrl
        },
        ...tradeAPlaneLinks,
        ...craigslistLinks,
        ...facebookLinks
    ];
}
function MarketplaceSearch() {
    _s();
    const [brand, setBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [model, setModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedStates, setSelectedStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLinks, setShowLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = ()=>setShowLinks(true);
    const handleReset = ()=>{
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
                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-600 text-4xl font-extrabold",
                        children: "Sky-Seeker"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                lineNumber: 350,
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
                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                lineNumber: 360,
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
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 363,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border rounded px-2 py-1 w-full",
                                                value: brand,
                                                onChange: (e)=>setBrand(e.target.value),
                                                placeholder: "e.g. Piper"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                        lineNumber: 362,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-1",
                                                children: "Model"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "border rounded px-2 py-1 w-full",
                                                value: model,
                                                onChange: (e)=>setModel(e.target.value),
                                                placeholder: "e.g. Cherokee"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                        lineNumber: 371,
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
                                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-2 top-1/2 -translate-y-1/2 text-gray-400",
                                                                children: "$"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                                lineNumber: 384,
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
                                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block font-semibold mb-1",
                                                        children: "Max Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-2 top-1/2 -translate-y-1/2 text-gray-400",
                                                                children: "$"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                                lineNumber: 398,
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
                                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block font-semibold mb-1",
                                                children: "State(s):"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 411,
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
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 412,
                                                columnNumber: 15
                                            }, this),
                                            selectedStates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-yellow-600 mt-1 font-semibold",
                                                children: [
                                                    "Heads Up, Captain!",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 37
                                                    }, this),
                                                    "No state selected means we can’t scan your six for local deals on Craigslist, Facebook Marketplace, or Trade-A-Plane. Plot a course—pick a state!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 mt-1",
                                                children: "You can search and select multiple states."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 430,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                        lineNumber: 410,
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
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 436,
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
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this),
                    showLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8 bg-white rounded-xl shadow p-6 w-full max-w-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold mb-4 text-center",
                                children: "Search Results on Major Sites"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                lineNumber: 457,
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
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this),
                                            link.note && link.note !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-red-500 mt-1 text-center",
                                                children: link.note
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                                lineNumber: 472,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, link.url, true, {
                                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                        lineNumber: 462,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mt-4 text-center",
                                children: "🛠️ Sky-Seeker Pro Tip: Want actual airplanes, not winged lawn ornaments? Use that min price box!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                                lineNumber: 479,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MarketplaceSearch.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MarketplaceSearch.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MarketplaceSearch.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
_s(MarketplaceSearch, "2ykM4jut/E0gwGet4/IsZcj7538=");
_c2 = MarketplaceSearch;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "STATE_OPTIONS$STATES.map");
__turbopack_context__.k.register(_c1, "STATE_OPTIONS");
__turbopack_context__.k.register(_c2, "MarketplaceSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ef63e334._.js.map