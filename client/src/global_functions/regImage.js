const regImage = (string) => {
  const checker = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  return checker.test(string);
};

export default regImage;
