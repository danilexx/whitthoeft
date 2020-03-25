import * as Yup from "yup";

export const favoriteStoreSchema = Yup.object().shape({
  productId: Yup.number().required(),
});
