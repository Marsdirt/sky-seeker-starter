document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
      resultsDiv.innerHTML = 'Please enter a search term.';
      return;
    }

    resultsDiv.innerHTML = 'Searching...';

    try {
      const res = await fetch(`https://sky-seeker-backend.onrender.com/api/search?q=${encodeURIComponent(query)}`);
      
      if (!res.ok) {
        // Show an error message for 404 or server errors
        resultsDiv.innerHTML = `Search failed: ${res.status} ${res.statusText}`;
        return;
      }

      // Try to parse JSON; if this fails, we catch it below.
      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        resultsDiv.innerHTML = 'No results found.';
      } else {
        resultsDiv.innerHTML = data.map(item =>
          `<p><a href="${item.url}" target="_blank" rel="noopener">${item.title}</a></p>`
        ).join('');
      }
    } catch (err) {
      console.error("Search failed", err);
      resultsDiv.innerHTML = 'Error during search. Please try again later.';
    }
  });
});
