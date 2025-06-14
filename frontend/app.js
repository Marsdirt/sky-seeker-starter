document
  .getElementById("searchForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("searchInput").value;

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const results = await response.json();

      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      results.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.link;
        link.target = "_blank";
        link.textContent = `${item.title} (${item.site})`;
        resultsDiv.appendChild(link);
      });
    } catch (err) {
      console.error("Search failed", err);
    }
  });
