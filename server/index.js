// server/index.js

const path = require('path');
const express = require("express");


const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../monday-main/build')));

app.get("/api", (_req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '../monday-main/build', 'index.html'));
});