import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// ✅ Fake search endpoint
app.get("/api/search", (req, res) => {
  const query = req.query.q;

  const results = [
    {
      title: `Test listing for "${query}"`,
      link: "https://example.com/aircraft-listing",
      site: "Example Site"
    }
  ];

  res.json(results);
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
