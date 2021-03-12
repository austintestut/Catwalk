const axios = require('axios');

const ip = '127.0.0.1';
const port = '8080';

const handler = {
  reviews: {
    post(body, cb = () => {}) {
      axios.post(`/reviews/`, body)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
    get(methods, cb = () => {}) {
      const { productId, sort, count } = methods;
      axios.get(`/reviews/${productId}/${sort}/${count}`)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
    getMeta(id, cb = () => {}) {
      axios.get(`/reviews/meta/${id}`)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
    update(id, method, cb = () => {}) {
      //method === helpful || report
      axios.put(`/reviews/${id}/${method}`)
        .then((response) => cb(response))
        .catch((err) => console.log(err));
    },
  },
};

export default handler;
