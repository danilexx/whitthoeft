import * as Yup from "yup";

export const userStoreSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  cpf: Yup.string().required(),
  password: Yup.string().required(),
  birth: Yup.date().required(),
  tep: Yup.string().required(),
});
