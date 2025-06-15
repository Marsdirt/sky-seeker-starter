const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample route to handle aircraft search
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase();
  const fakeResults = [
    {
      id: 1,
      title: 'Cessna 172 for sale',
      location: 'Dallas, TX',
      url: 'https://example.com/listing/1'
    },
    {
      id: 2,
      title: 'Piper Cherokee 180 available',
      location: 'Orlando, FL',
      url: 'https://example.com/listing/2'
    }
  ];

  // Filter fake results if a search query is provided
  const results = query
    ? fakeResults.filter(item => item.title.toLowerCase().includes(query))
    : fakeResults;

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

