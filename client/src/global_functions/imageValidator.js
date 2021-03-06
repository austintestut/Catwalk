import React from 'react';
import axios from 'axios';

const imageValidator = (imagesArr, cb) => {
  let resultsArr = [];
  let counter = 0;
  let bool;
  const urlValidator = (url, cb = () => {}) => {
    axios.head(url).then(({ headers }) => cb(headers['content-type']));
  };

  const asyncManage = (result) => {
    resultsArr.push(result);
    if (resultsArr.length === imagesArr.length) {
      for (let x = 0; x < resultsArr.length; x++) {
        const current = resultsArr[x];
        debugger;
        if (current !== 'image/jpeg' && current !== 'image/png') {
          bool = false;
        }
        bool = true;
      }
      return cb(bool);
    }
    urlValidator(imagesArr[counter], asyncManage);
  };
  urlValidator(imagesArr[0], asyncManage);
};

export default imageValidator;
