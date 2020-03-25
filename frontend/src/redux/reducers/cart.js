import produce from "immer";
import actionTypes from "../actionTypes";

const initialState = [];
const cartReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case actionTypes.cart.ADD: {
      const { product, quantity, size, color } = action;
      const condition = draft.some(e => e.product.id === product.id);
      if (condition) {
        // adicionar a algum existente;
        const index = draft.findIndex(e => e.product.id === product.id);
        // eslint-disable-next-line no-param-reassign
        const newQuantity = Number(draft[index].quantity) + Number(quantity);
        draft[index].quantity = newQuantity;
      } else {
        draft.push({ product, quantity, size, color });
      }
      break;
    }
    case actionTypes.cart.REMOVE: {
      const find = e => e.product.id === action.productId;
      const value = draft.find(find);
      const index = draft.findIndex(find);
      if (value.quantity === 1) {
        return draft.filter(e => e.product.id !== action.productId);
      }
      draft[index].quantity -= 1;

      break;
      // return draft.filter(e => e.product.id !== action.productId);
    }
    case actionTypes.cart.SET_QUANTITY: {
      const find = e => e.product.id === action.productId;
      const value = draft.find(find);
      const index = draft.findIndex(find);
      draft[index] = { ...value, quantity: action.quantity };
      if (draft[index].quantity === 0) {
        draft = draft.filter((_, productIndex) => productIndex !== index);
      }
      break;
    }
    case actionTypes.cart.CLEAR: {
      return [];
    }
    default:
      return draft;
  }
  return draft;
});

export default cartReducer;
