import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";
import favoritesReducer from "./favorites";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});
