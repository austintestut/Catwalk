const express = require('express');
const path = require('path');

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(port, () => {
  console.log('Server listening at:', port);
});
