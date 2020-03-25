import * as Yup from "yup";

export const cartStoreSchema = Yup.object().shape({
  productId: Yup.number().required(),
});
