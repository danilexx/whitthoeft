import getRandomNumberBetween from "./getRandomNumberBetween";

const imageUrlList = [
  "camisa1",
  "camisa2",
  "camisa3",
  "camisa4",
  "camisa5",
  "camisa6",
  "camisa7",
  "camisa8",
  "camisa9",
  "camisa10",
  "calca1",
  "calca2",
  "calca3",
  "calca4",
  "calca5",
  "calca6",
  "calca7",
  "calca8",
  "calca9",
  "calca10",
].map(e => `/imgs/${e}.jpg`);

const getRandomImage = () => {
  return imageUrlList[getRandomNumberBetween(0, imageUrlList.length - 1)];
};

export default getRandomImage;
