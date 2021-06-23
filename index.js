const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // what is the http
const path = require('path');

// add middlewares
app.use(express.static(path.join(__dirname, "build")));
// app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get('/', (req, res) => {
    res.end(console.log('yay'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})