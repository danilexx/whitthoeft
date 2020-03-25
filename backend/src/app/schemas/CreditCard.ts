import * as Yup from "yup";

export const creditCardStoreSchema = Yup.object().shape({
  number: Yup.string().max(25).required(),
  cvv: Yup.string().max(4).required(),
  expiry: Yup.string().max(5).required(),
  name: Yup.string().max(150).required(),
  issuer: Yup.string().max(20).required(),
});
