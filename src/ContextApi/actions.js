const actionTypes = {
  setUser: "SET_USER",
  setDataUser: "SET_DATA_USER",
  setCanSell: "SET_CAN_SELL",
  setHits: "SET_HITS",
  setShowAutoComplete: "SET_SHOW_AUTOCOMPLETE",
  setSearchText: "SET_SEARCH_TEXT",
  addProduct: "ADD_PRODUCT",
  removeProduct: "REMOVE_PRODUCT",
  updateTotalProduct: "UPDATE_TOTAL_OF_PRODUCT",
};

const setUser = (payload) => {
  return {
    type: actionTypes.setUser,
    user: payload,
  };
};

const setDataUser = (payload) => {
  return {
    type: actionTypes.setDataUser,
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

export {
  setUser,
  actionTypes,
  setDataUser,
  setCanSell,
  setHits,
  setShowAutoComplete,
  setSearchText,
  addProduct,
  updateTotalProduct,
};
