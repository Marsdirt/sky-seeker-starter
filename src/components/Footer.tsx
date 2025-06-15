export function Footer() {
  return (
    <footer className="bg-card shadow-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Sky-Seeker. All rights reserved.</p>
        <p className="text-xs mt-1">
          Aircraft listings aggregated from various sources. Please verify all information with the seller.
        </p>
      </div>
    </footer>
  );
}
