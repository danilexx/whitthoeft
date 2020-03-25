import produce from "immer";
import actionTypes from "../actionTypes";

const favoritesReducer = produce((draft = [], action) => {
  switch (action.type) {
    case actionTypes.favorites.ADD: {
      // return draft;
      draft.push(action.productId);
      break;
    }
    case actionTypes.favorites.REMOVE: {
      return draft.filter(e => e !== action.productId);
    }
    case actionTypes.favorites.SET: {
      return action.products;
    }
    default:
      return draft;
  }
});

export default favoritesReducer;
