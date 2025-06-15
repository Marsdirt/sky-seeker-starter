const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root route — just for testing
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

// ✅ New route to handle search
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  const sampleResults = [
    {
      title: `Cessna 172 Skyhawk`,
      url: 'https://example.com/cessna-172'
    },
    {
      title: `Piper Cherokee 140`,
      url: 'https://example.com/piper-cherokee'
    },
    {
      title: `Beechcraft Bonanza`,
      url: 'https://example.com/bonanza'
    }
  ];

  const results = sampleResults.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
