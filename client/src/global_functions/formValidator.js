const formValidator = (stateObj, type, imgState) => {
  let {
    recommend, nickname, email, summary, body, stars, characteristics,
    image1, image2, image3, image4, image5
  } = stateObj;
  debugger;
  let images = [image1, image2, image3, image4, image5];
  let viableImages = [];

  const checkEmail = (string) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(string)) { return true; }
    return false;
  };

  const checkImg = (string) => {
    const imageChecker = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    return imageChecker.test(string);
  };

  // imageValidator(exampleImages, (result)=>{console.log(result)});
  let errors = {};

  if (!type) {
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
  }

  images.forEach((image, index) => {
    debugger;
    if (image !== '') {
      if (checkImg(image)) {
        viableImages.push(image);
      } else {
        const key = `image${index + 1}`;
        errors[key] = 'invalid url';
      }
    }
  });
  if (type === 'image') {
    if (Object.values(errors).length) { return errors; }
    imgState(viableImages);
    return false;
  }

  if (Object.values(errors).length) { return errors; }
  console.log('content acceptable');
  return (false);
};

export default formValidator;
