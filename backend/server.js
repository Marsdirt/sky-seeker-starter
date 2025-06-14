import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  // Placeholder sample results
  const listings = [
    { title: `Sample plane 1 matching "${query}"`, url: 'https://example.com/1' },
    { title: `Sample plane 2 matching "${query}"`, url: 'https://example.com/2' }
  ];
  res.json(listings);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
