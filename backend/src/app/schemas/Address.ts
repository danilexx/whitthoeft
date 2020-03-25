import * as Yup from "yup";

export const addressStoreSchema = Yup.object().shape({
  cep: Yup.string().max(9).required(),
  street: Yup.string().max(100).required(),
  city: Yup.string().max(100).required(),
  state: Yup.string().max(20).required(),
  complement: Yup.string().max(200).notRequired(),
  district: Yup.string().max(100).required(),
});
