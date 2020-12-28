const productActionTypes = {
  setPage: "SET_PAGE",
  setFeatures: "SET_FEATURES",
  setName: "SET_NAME",
  setBrand: "SET_BRAND",
  setPickupAddress: "SET_PICKUP_ADDRESS",
  setShortDescription: "SET_SHORT_DESCRIPTION",
  setDescription: "SET_DESCRIPTION",
};

const setFormPage = (payload) => ({
  type: productActionTypes.setPage,
  page: payload,
});

const setFormFeatures = (payload) => ({
  type: productActionTypes.setFeatures,
  features: payload,
});

const setFormName = (payload) => ({
  type: productActionTypes.setName,
  name: payload,
});

const setFormBrand = (payload) => ({
  type: productActionTypes.setBrand,
  brand: payload,
});

const setFormPickupAddress = (payload) => ({
  type: productActionTypes.setPickupAddress,
  pickupAddress: payload,
});

const setFormShortDescription = (payload) => ({
  type: productActionTypes.setShortDescription,
  shortDescription: payload,
});

const setFormDescription = (payload) => ({
  type: productActionTypes.setDescription,
  description: payload,
});

export {
  productActionTypes,
  setFormPage,
  setFormFeatures,
  setFormName,
  setFormBrand,
  setFormPickupAddress,
  setFormShortDescription,
  setFormDescription,
};
