
// This file is a placeholder to ensure it doesn't conflict with src/app/page.tsx
// If you see this page, there's a configuration issue with Next.js srcDir,
// or the main page at src/app/page.tsx failed to render.
export default function RootFallbackPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Fallback Page</h1>
      <p>If you are seeing this, the Next.js app is incorrectly using the root app directory instead of src/app, or your main page in src/app/page.tsx has an error.</p>
      <p>Please ensure your Next.js configuration (next.config.js) and project structure correctly prioritize src/app.</p>
      <p>The intended page should be rendered from src/app/page.tsx.</p>
    </div>
  );
}
