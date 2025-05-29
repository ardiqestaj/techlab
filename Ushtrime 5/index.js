import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  res.json({ name: name });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
