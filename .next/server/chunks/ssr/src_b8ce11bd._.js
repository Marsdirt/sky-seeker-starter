module.exports = {

"[project]/src/utils/buildCraigslistUrl.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildCraigslistSearchUrl": (()=>buildCraigslistSearchUrl)
});
function buildCraigslistSearchUrl({ zip, distance, minPrice, maxPrice, query }) {
    const params = new URLSearchParams({
        search_distance: distance.toString(),
        postal: zip,
        min_price: minPrice.toString(),
        max_price: maxPrice.toString(),
        query
    });
    return `https://www.craigslist.org/search/sss?${params.toString()}`;
}
}}),
"[project]/src/utils/buildFacebookUrl.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildFacebookMarketplaceUrl": (()=>buildFacebookMarketplaceUrl)
});
function buildFacebookMarketplaceUrl({ zip, distance, query }) {
    // Facebook Marketplace doesn't support direct zip/distance, but we can build a search URL with the query
    const params = new URLSearchParams({
        query,
        radius: distance.toString(),
        location: zip
    });
    return `https://www.facebook.com/marketplace/search/?${params.toString()}`;
}
}}),
"[project]/src/components/MarketplaceSearch.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/components/MarketplaceSearch.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=src_b8ce11bd._.js.map