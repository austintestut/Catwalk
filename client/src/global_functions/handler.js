const axios = require('axios');

const ip = '127.0.0.1';
const port = '8080';

const handler = {
  reviews: {
    post(body, cb = () => {}) {
      axios.post(`http://${ip}:${port}/reviews/`, body)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
    get(methods, cb = () => {}) {
      const { productId, sort, count } = methods;
      axios.get(`http://${ip}:${port}/reviews/${productId}/${sort}/${count}`)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
    getMeta(id, cb = () => {}) {
      const body = { id };
      axios.get(`http://${ip}:${port}/reviews/meta`, body)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
  },
};

export default handler;
