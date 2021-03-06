const axios = require('axios');
//const port = require('../../../server/index.js').port

const ip = '127.0.0.1';
const port = '8080';

const handler = {
  reviews: {
    post(body, cb = () => {}) {
      debugger;
      axios.post(`http://${ip}:${port}/reviews/`, body)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
  },
};

export default handler;
