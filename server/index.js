const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('../config.js')

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(port, () => {
  console.log('Server listening at:', port);
});

app.get('/questions', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=17761',
    method: 'get',
    responseType: 'text',
  }).then((data)=>{
    res.send(data.data)
  }).catch((error)=>{
    console.log('error case')
    res.send(error)
  })
});
