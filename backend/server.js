const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Dummy route to simulate search results
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const results = [
    { id: 1, title: 'Cessna 172 Skyhawk for sale', location: 'Dallas, TX', url: '#' },
    { id: 2, title: 'Piper PA-28 Cherokee', location: 'Orlando, FL', url: '#' },
    { id: 3, title: 'Diamond DA40 XLS', location: 'Phoenix, AZ', url: '#' },
  ];

  const filtered = results.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
});

