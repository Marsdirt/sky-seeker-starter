const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
  res.json([
    { city: "Almaty, KZ" },
    { city: "Moscow, RU" },
    { city: "Dubai, AE" },
    { city: "Cary, NC, US" },
    { city: "Tokyo, JP" },
    { city: "Sunnyvale, CA, US" },
    { city: "Prague, CZ" }
  ]);
});

// 🆕 Search route for aircraft
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase();

  // Dummy search result (you can replace with real search logic later)
  const sampleResults = [
    {
      title: `Cessna 172 for Sale - ${query}`,
      url: 'https://example.com/cessna-172'
    },
    {
      title: `Piper Cherokee near you - ${query}`,
      url: 'https://example.com/piper-cherokee'
    }
  ];

  // Filter sample results by keyword
  const results = sampleResults.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
