const express = require('express');
const app = express();
const port = 80; // what is the http
const path = require('path');

// add middlewares
app.use(express.static(path.join(__dirname, "build")));
// app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get('/', (req, res) => {
    res.end(console.log('suckabigponyyoufuck'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})