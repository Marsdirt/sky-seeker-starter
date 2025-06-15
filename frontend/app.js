document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    resultsDiv.innerHTML = 'Searching...';

    try {
      const res = await fetch(`https://sky-seeker-backend.onrender.com/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (data.length === 0) {
        resultsDiv.innerHTML = 'No results found.';
      } else {
        resultsDiv.innerHTML = data.map(item =>
          `<p><a href="${item.url}" target="_blank">${item.title}</a></p>`
        ).join('');
      }
    } catch (err) {
      console.error("Search failed", err);
      resultsDiv.innerHTML = 'Error during search.';
    }
  });
});

