const formValidator = (stateObj) => {
  let {
    recommend, nickname, email, summary, body, stars, characteristics,
  } = stateObj;
  const checkEmail = (string) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string)) { return true; }
    return false;
  };

  // imageValidator(exampleImages, (result)=>{console.log(result)});
  let errors = {};
  if (Object.values(characteristics).indexOf(null) !== -1) { errors.characteristics = ('characteristics required'); }
  if (recommend === null) { errors.recommend = ('recommendation required'); }
  if (nickname.length === 0) { errors.nickname = ('nickname required'); }
  else if (nickname.length > 60 || nickname.includes(' ')) { errors.nickname = ('invalid nickname'); }
  if (email.length === 0) { errors.email = ('email required'); }
  else if (email.length > 60 || !checkEmail(email)) { errors.email = ('invalid email'); }
  if (summary.length > 60) { errors.summary = ('invalid review summary'); }
  if (body.length === 0) { errors.body = ('review body required'); }
  else if (body.length < 250 || body.length > 1000) { errors.body = ('invalid review body'); }
  if (stars === null) { errors.rating = ('rating required'); }

  if (Object.values(errors).length) { return errors; }
  console.log('content acceptable');
  return (false);
};

export default formValidator;
