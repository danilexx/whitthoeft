import * as Yup from "yup";

export const commentStoreSchema = Yup.object().shape({
  description: Yup.string().required(),
  rating: Yup.number().required(),
});
