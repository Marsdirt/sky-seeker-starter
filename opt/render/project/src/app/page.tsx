
// This file is a placeholder to ensure it doesn't conflict with src/app/page.tsx
// If you see this page, there's a configuration issue with Next.js srcDir,
// or the main page at src/app/page.tsx failed to render.
export default function RootFallbackPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f0f8ff' }}>
      <h1>ROOT FALLBACK PAGE</h1>
      <p>This page is from /opt/render/project/src/app/page.tsx (the project root's app/page.tsx).</p>
      <p>You should NOT be seeing this if the app is configured correctly to use the 'src' directory.</p>
      <p>The main application page should be rendered from 'src/app/page.tsx'.</p>
      <p>Commit: Diagnostic Test 1</p>
    </div>
  );
}
