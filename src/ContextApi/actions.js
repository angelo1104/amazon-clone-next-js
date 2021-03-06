const actionTypes = {
  setUser: "SET_USER",
  setCanSell: "SET_CAN_SELL",
  setHits: "SET_HITS",
  setShowAutoComplete: "SET_SHOW_AUTOCOMPLETE",
  setSearchText: "SET_SEARCH_TEXT",
  addProduct: "ADD_PRODUCT",
  removeProduct: "REMOVE_PRODUCT",
  updateTotalProduct: "UPDATE_TOTAL_OF_PRODUCT",
  setCart: "SET_CART",
};

const setUser = (payload) => {
  return {
    type: actionTypes.setUser,
    user: payload,
  };
};

const setCanSell = (payload) => {
  return {
    type: actionTypes.setCanSell,
    canSell: payload,
  };
};

const setSearchText = (payload) => {
  return {
    type: actionTypes.setSearchText,
    searchText: payload,
  };
};

const setHits = (payload) => {
  return {
    type: actionTypes.setHits,
    hits: payload,
  };
};

const setShowAutoComplete = (payload) => {
  return {
    type: actionTypes.setShowAutoComplete,
    showAutoComplete: payload,
  };
};

const addProduct = (payload) => {
  return {
    type: actionTypes.addProduct,
    product: payload,
  };
};

const updateTotalProduct = (payload) => {
  return {
    type: actionTypes.updateTotalProduct,
    product: payload,
  };
};

const removeProduct = (payload) => {
  return {
    type: actionTypes.removeProduct,
    product: payload,
  };
};

const setCart = (payload) => {
  return {
    type: actionTypes.setCart,
    cart: payload,
  };
};

export {
  setUser,
  actionTypes,
  setCanSell,
  setHits,
  setShowAutoComplete,
  setSearchText,
  addProduct,
  updateTotalProduct,
  removeProduct,
  setCart,
};
