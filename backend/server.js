app.get("/api/search", (req, res) => {
  const query = req.query.q;

  // For now, just return a fake result
  const results = [
    {
      title: `Test result for "${query}"`,
      link: "https://example.com/fake-aircraft",
      site: "Example Site"
    }
  ];

  res.json(results);
});
