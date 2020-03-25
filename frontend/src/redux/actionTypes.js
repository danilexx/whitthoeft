const actionTypes = {
  user: {
    LOGIN: "USER/LOGIN",
    LEAVE: "USER/LEAVE",
    ADD_ADDRESS: "USER/ADD_ADDRESS",
    REMOVE_ADDRESS: "USER/REMOVE_ADDRESS",
  },
  cart: {
    ADD: "CART/ADD",
    REMOVE: "CART/REMOVE",
    SET_QUANTITY: "CART/SET_QUANTITY",
    CLEAR: "CART/CLEAR",
  },
  favorites: {
    ADD: "FAVORITES/ADD",
    REMOVE: "FAVORITES/REMOVE",
    SET: "FAVORITES/SET",
  },
};

export default actionTypes;
