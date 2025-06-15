const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Test API route
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  
  // Sample dummy data
  const results = [
    { title: `Sample Cessna listing for: ${query}`, url: "https://example.com/listing1" },
    { title: `Another listing for: ${query}`, url: "https://example.com/listing2" }
  ];

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

