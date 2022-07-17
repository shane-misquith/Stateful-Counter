const express = require('express')
const app = express();
const port = 5000;
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("counter")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});