import { actionTypes } from "./actions";

export const initialState = {
  user: null,
  dataUser: null,
  hits: [],
  showAutoComplete: false,
  searchText: "",
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setUser:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.setDataUser:
      return {
        ...state,
        dataUser: action.user,
      };
    case actionTypes.setHits:
      return {
        ...state,
        hits: action.hits,
      };
    case actionTypes.setShowAutoComplete:
      return {
        ...state,
        showAutoComplete: action.showAutoComplete,
      };
    case actionTypes.setSearchText:
      return {
        ...state,
        searchText: action.searchText,
      };
    case actionTypes.addProduct:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case actionTypes.updateTotalProduct:
      const cart = [];
      [...state.cart].forEach((item) => {
        if (item._id === action.product._id) {
          cart.push(action.product);
        } else {
          cart.push(item);
        }
      });

      return {
        ...state,
        cart: cart,
      };
    case actionTypes.removeProduct:
      const cartClone = [...state.cart];
      const carty = [];

      cartClone.forEach((item, index) => {
        if (item._id === action.product._id) {
          // this is product
          if (item.amount >= 2) {
            //reduce 1 amount
            const product = { ...item, amount: parseInt(item.amount) - 1 };

            carty.push(product);
          }
        } else {
          carty.push(item);
        }
      });

      return { ...state, cart: carty };
    default:
      return { ...state };
  }
};

export default reducer;
