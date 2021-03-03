const express = require('express');
const path = require('path');
const axios = require('axios');
<<<<<<< HEAD
const config = require('../config.js')
=======
const TOKEN = require('../config').TOKEN;

>>>>>>> 76a85920f098b854593445d3b89dfc344ac34599

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

<<<<<<< HEAD
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
=======
app.get('/reviews/meta', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${req.body.id}`, {
    headers: {
      Authorization: TOKEN
    }
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR getting average star rating');
      res.status(404).send(err);
    });
});

app.get(`/products/styles`, (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.body.id}/styles`, {
    headers: {
      Authorization: TOKEN
    }
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR getting average styles');
      res.status(404).send(err);
    });
});

app.get(`/products/related`, (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.body.id}/related`, {
    headers: {
      Authorization: TOKEN
    }
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR Axios request for related products');
      res.status(404).send(err);
    });
});

app.listen(port, () => {
  console.log('Server listening at:', port);
>>>>>>> 76a85920f098b854593445d3b89dfc344ac34599
});
