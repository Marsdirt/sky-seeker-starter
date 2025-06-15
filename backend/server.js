const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample search route
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  const sampleResults = [
    { title: 'Cessna 172 Skyhawk', url: 'https://example.com/cessna-172' },
    { title: 'Piper Cherokee 140', url: 'https://example.com/piper-cherokee' },
    { title: 'Beechcraft Bonanza', url: 'https://example.com/bonanza' }
  ];

  const results = sampleResults.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  res.json(results);
});

app.get('/', (req, res) => {
  res.send('Sky-Seeker API is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

