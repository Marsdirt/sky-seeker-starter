const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Add this route!
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }
  // Dummy data for now
  res.json([
    {
      title: `Sample result for "${query}"`,
      url: `https://example.com/search?q=${encodeURIComponent(query)}`
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
