const reviewBodyConstructor = (obj, meta) => {
  const { product_id, characteristics } = meta;
  const { recommend, nickname, email, summary, body, images, stars } = obj;
  const charRatings = obj.characteristics;

  const charBody = {};
  Object.entries(charRatings).forEach((rating) => {
    let key = characteristics[rating[0]].id;
    charBody[key] = +rating[1];
  });

  const resBody = {
    "product_id": +product_id,
    "rating": stars,
    "summary": summary,
    "body": body,
    "recommend": Boolean(recommend),
    "name": nickname,
    "email": email,
    "photos": images,
    "characteristics": charBody,
  };
  return resBody;
};

export default reviewBodyConstructor;
