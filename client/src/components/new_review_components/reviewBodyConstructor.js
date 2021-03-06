const reviewBodyConstructor = (obj, meta) => {
  /*
{
    "product_id": 17762,
    "rating": 4,
    "summary": "hi",
    "body": "GET THE BREAD! GET THE BREAD! GET THE BREAD!
    GET THE BREAD! GET THE BREAD! GET THE BREAD! GET THE
    BREAD! GET THE BREAD! GET THE BREAD! GET THE BREAD!
    GET THE BREAD! GET THE BREAD! GET THE BREAD! GET THE
    BREAD! GET THE BREAD! GET THE BREAD! GET THE BREAD!",
    "recommend": false,
    "name": "alexBoy",
    "email": "ashold12@shold.com",
    "photos": [],
    "characteristics": {
                    "59528": 4,
                    "59529": 3,
                    "59530": 5,
                    "59531": 4
    }
}
  */
  const {product_id, characteristics} = meta;
  const {recommend, nickname, email, summary, body, images, stars} = obj;
  const charRatings = obj.characteristics;

  let charBody = {};
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
  debugger;
  console.log(resBody);
};

export default reviewBodyConstructor;
