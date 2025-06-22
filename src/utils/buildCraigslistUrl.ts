export function buildCraigslistSearchUrl({
  zip,
  distance,
  minPrice,
  maxPrice,
  query,
}: {
  zip: string;
  distance: number;
  minPrice: number;
  maxPrice: number;
  query: string;
}) {
  const params = new URLSearchParams({
    search_distance: distance.toString(),
    postal: zip,
    min_price: minPrice.toString(),
    max_price: maxPrice.toString(),
    query,
  });
  return `https://www.craigslist.org/search/sss?${params.toString()}`;
}