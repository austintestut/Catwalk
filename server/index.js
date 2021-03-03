const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('../config.js')

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

/* request body is JSON:
  {
    "id": "#####""
  }
*/
app.get(`/products`, (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.body.id}`, {
    headers: {
      Authorization: TOKEN
    }
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR Axios request for product');
      res.status(404).send(err);
    });
});

app.get('/questions/:id', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${req.params.id}`,
    method: 'get',
    responseType: 'text',
  }).then((data)=>{
    res.send(data.data)
  }).catch((error)=>{
    console.log('error case')
    res.send(error)
  })
});

app.post('/questions', (req, res)=> {

})

app.listen(port, () => {
  console.log('Server listening at:', port);
});
