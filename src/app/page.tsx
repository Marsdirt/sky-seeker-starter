import MarketplaceSearch from "../../components/MarketplaceSearch";

export default function Page() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h1>Marketplace Search</h1>
      <p>
        Search Craigslist and Facebook Marketplace by ZIP code, distance, price, and keywords—all from one place.
      </p>
      <MarketplaceSearch />
    </div>
  );
}