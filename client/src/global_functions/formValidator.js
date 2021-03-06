import React from 'react';
import axios from 'axios';
import imageValidator from './imageValidator';

const formValidator = (stateObj) => {
  let {
    recommend, nickname, email, summary, body, images, stars
  } = stateObj;
  const checkEmail = (string) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string)) { return true; }
    return false;
  };
  let exampleImages = ["https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"]
  imageValidator(exampleImages, (result)=>{console.log(result)});
  let errors = [];
  if (recommend === null) { errors.push('recommendation required'); }
  if (nickname.length === 0) { errors.push('nickname required'); }
  if (nickname.length > 60 || nickname.contains(' ')) { errors.push('invalid nickname'); }
  if (email.length === 0) { errors.push('email required'); }
  if (email.length > 60 || !checkEmail(email)) { errors.push('invalid email'); }
  if (summary.length > 60) { errors.push('invalid review summary'); }
  if (body.length === 0) { errors.push('review body required'); }
  if (body.length < 250 || body.length > 1000) { errors.push('invalid review body'); }
  if (stars === null) { errors.push('invalid rating (star select)'); }
};

export default formValidator;
