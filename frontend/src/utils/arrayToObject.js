const arrayToObject = array => {
  return array.reduce((accum, [k, v]) => {
    // eslint-disable-next-line no-param-reassign
    accum[k] = v;
    return accum;
  }, {});
};

export default arrayToObject;
