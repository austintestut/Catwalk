const express = require('express');
const path = require('path');
const axios = require('axios');
const TOKEN = require('../config').TOKEN;

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

app.get('/reviews/meta/:id?', (req, res) => {
  console.log('meta');
  console.log(req.params);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${req.params.id}`, {
    headers: {
      Authorization: TOKEN
    }
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR getting reviews metadata');
      res.status(404).send(err);
    });
});

app.get('/reviews/:product_id/:sort/:count', (req, res) => {
  console.log('not meta');
  console.log(req.params);
  let { product_id, sort, count} = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${product_id}&count=${count}&sort=${sort}`, {
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR getting reviews meta data');
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
      Authorization: TOKEN,
    },
  })
    .then((data) => {
      res.status(200).send(data.data);
    })
    .catch((err) => {
      console.log('ERR Axios request for related products');
      res.status(404).send(err);
    });
});

app.post(`/reviews`, (req, res) => {
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`, req.body, {
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((data) => {
      res.status(201).send(data.data);
    })
    .catch((err) => {
      console.log('ERR posting review');
      res.status(500).send(err);
    });
});

app.put(`/reviews/:review_id/:method`, (req, res) => {
  // not working????
  console.log(req.params);
  const { review_id, method } = req.params;
  // method === 'helpful' || 'report'
  if (!method) { method = 'helpful'; }
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/${method}`;
  console.log(url);
  axios.put(url, {
    headers: {
      Authorization: TOKEN,
    },
  })
    .then((data) => {
      console.log('good');
      console.log(data);
      res.status(201).send(data.data);
    })
    .catch((err) => {
      console.log(err.response.status);
    });
});
app.listen(port, () => {
  console.log('Server listening at:', port);
});

module.exports = {
  port,
};
