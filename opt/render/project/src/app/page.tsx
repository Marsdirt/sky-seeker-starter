
// This file should be ignored by Next.js if srcDir: 'src' is set.
// Making it effectively empty or just a comment.
// This is the fallback page for the root directory if srcDir is not configured or respected.
// We expect src/app/page.tsx to be the primary page.
export default function RootFallbackPage() {
  return (
    <div>
      <h1>ROOT FALLBACK PAGE</h1>
      <p>If you see this, Next.js is serving from the project root's app directory, not the src/app directory.</p>
      <p>This page should ideally not be visible if srcDir: 'src' is working correctly.</p>
    </div>
  );
}
