import produce from "immer";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import actionTypes from "../actionTypes";

const userReducer = produce((draft = { addresses: [] }, action) => {
  switch (action.type) {
    case actionTypes.user.LOGIN: {
      const { token } = action;
      const decodedToken = jwt_decode(token);
      const { email } = decodedToken;
      const role =
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];
      Cookies.set("token", token);
      return { email, token, role, addresses: [] };
    }
    case actionTypes.user.LEAVE: {
      Cookies.remove("token");
      return {};
    }
    case actionTypes.user.ADD_ADDRESS: {
      draft.addresses.push({ ...action.address, id: draft.addresses.length });
      break;
    }
    case actionTypes.user.REMOVE_ADDRESS: {
      draft.addresses = draft.addresses.filter(
        (e, index) => index !== action.addressId
      );
      break;
    }
    default:
      return draft;
  }
});

export default userReducer;
