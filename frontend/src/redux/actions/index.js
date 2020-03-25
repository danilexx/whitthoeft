import actionTypes from "../actionTypes";

const actions = {
  user: {
    login: token => ({
      type: actionTypes.user.LOGIN,
      token,
    }),
    leave: () => ({
      type: actionTypes.user.LEAVE,
    }),
    addAddress: (address, whoReceives) => ({
      type: actionTypes.user.ADD_ADDRESS,
      address: {
        ...address,
        whoReceives,
      },
    }),
    removeAddress: addressId => ({
      type: actionTypes.user.REMOVE_ADDRESS,
      addressId,
    }),
  },
  favorites: {
    add: productId => ({
      type: actionTypes.favorites.ADD,
      productId,
    }),
    remove: productId => ({
      type: actionTypes.favorites.REMOVE,
      productId,
    }),
    set: products => ({
      type: actionTypes.favorites.SET,
      products,
    })
    
  },
  cart: {
    add: (product, size, quantity, color) => ({
      type: actionTypes.cart.ADD,
      product,
      size,
      quantity,
      color,
    }),
    remove: productId => ({
      type: actionTypes.cart.REMOVE,
      productId,
    }),
    setQuantity: (productId, quantity) => ({
      type: actionTypes.cart.SET_QUANTITY,
      productId,
      quantity,
    }),
    clear: () => ({
      type: actionTypes.cart.CLEAR
    })
  },
};
export default actions;
