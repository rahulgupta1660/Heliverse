import express from "express";

import cors from "cors";

import { data } from "./data.js";

const app = express();

app.use(cors());

const port = 5050;

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
