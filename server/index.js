const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('../config.js');

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

/* request body is JSON:
  {
    "id": "#####""
  }
*/
app.get('/products', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.body.id}`, {
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR Axios request for product');
      res.status(404).send(err);
    });
});
// Gets all the questions
app.get('/questions/:id', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    params: {
      product_id: req.params.id,
      count: 100,
    },
    method: 'get',
    responseType: 'text',
  }).then((data) => {
    res.send(data.data);
  }).catch((error) => {
    console.log('error case');
    res.send(error);
  });
});

app.post('/questions/:id', (req, res) => {
  console.log(req.body);
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
    method: 'post',
    data: req.body,
  }).then((data) => {
    console.log('Posted!');
    res.send(data);
  }).catch((error) => {
    res.send(error);
  });
});

app.post('/questions/:id/answers', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/answers`,
    method: 'post',
    data: req.body,
  }).then((data) => {
    res.send('Posted your Question!');
  }).catch((error) => {
    res.send(error);
  });
});
app.put('/questions/:id/helpful', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/helpful`,
    method: 'put',
  }).then((data) => {
    res.send(data);
  })
    .catch((error) => { res.send(error); });
});
app.put('/questions/:id/report', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.params.id}/report`,
    method: 'put',
  }).then((data) => {
    res.send(data);
  })
    .catch((error) => { res.send(error); });
});
app.put('/answers/:id', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.id}/helpful`,
    method: 'put',
  }).then((data) => {
    res.send(data);
  })
    .catch((error) => { res.send(error); });
});

app.put('/answers/:id/report', (req, res) => {
  axios({
    headers: {
      Authorization: config.TOKEN,
    },
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.params.id}/report`,
    method: 'put',
  }).then((data) => {
    res.send(data);
  })
    .catch((error) => { res.send(error); });
});

app.listen(port, () => {
  console.log('Server listening at:', port);
});
