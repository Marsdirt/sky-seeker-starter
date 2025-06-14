document.getElementById('searchForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('searchInput').value;

  const results = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  const data = await results.json();

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  data.forEach(listing => {
    const link = document.createElement('a');
    link.href = listing.url;
    link.textContent = listing.title;
    link.target = '_blank';
    resultsDiv.appendChild(link);
    resultsDiv.appendChild(document.createElement('br'));
  });
});
