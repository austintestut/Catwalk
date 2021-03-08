const formValidator = (stateObj) => {
  let {
    recommend, nickname, email, summary, body, stars, characteristics,
  } = stateObj;
  const checkEmail = (string) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string)) { return true; }
    return false;
  };

  // imageValidator(exampleImages, (result)=>{console.log(result)});
  let errors = [];
  if (Object.values(characteristics).indexOf(null) !== -1) { errors.push('characteristics required'); }
  if (recommend === null) { errors.push('recommendation required'); }
  if (nickname.length === 0) { errors.push('nickname required'); }
  else if (nickname.length > 60 || nickname.includes(' ')) { errors.push('invalid nickname'); }
  if (email.length === 0) { errors.push('email required'); }
  else if (email.length > 60 || !checkEmail(email)) { errors.push('invalid email'); }
  if (summary.length > 60) { errors.push('invalid review summary'); }
  if (body.length === 0) { errors.push('review body required'); }
  else if (body.length < 250 || body.length > 1000) { errors.push('invalid review body'); }
  if (stars === null) { errors.push('rating required'); }

  if (errors.length) { return errors; }
  console.log('content acceptable');
  return (false);
};

export default formValidator;
