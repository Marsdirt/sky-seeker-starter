export function buildFacebookMarketplaceUrl({
  zip,
  distance,
  query,
}: {
  zip: string;
  distance: number;
  query: string;
}) {
  // Facebook Marketplace doesn't support direct zip/distance, but we can build a search URL with the query
  const params = new URLSearchParams({
    query,
    radius: distance.toString(),
    location: zip,
  });
  return `https://www.facebook.com/marketplace/search/?${params.toString()}`;
}