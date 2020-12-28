import { productActionTypes } from "./productsActions";

export const productInitialState = {
  page: 0,
  features: [""],
  name: "",
  brand: "",
  pickupAddress: "",
  shortDescription: "",
  description: "",
};

const productReducer = (state, action) => {
  switch (action.type) {
    case productActionTypes.setPage:
      return {
        ...state,
        page: action.page,
      };
    case productActionTypes.setFeatures:
      return {
        ...state,
        features: action.features,
      };
    case productActionTypes.setName:
      return {
        ...state,
        name: action.name,
      };
    case productActionTypes.setBrand:
      return {
        ...state,
        brand: action.brand,
      };
    case productActionTypes.setPickupAddress:
      return {
        ...state,
        pickupAddress: action.pickupAddress,
      };
    case productActionTypes.setShortDescription:
      return {
        ...state,
        shortDescription: action.shortDescription,
      };
    case productActionTypes.setDescription:
      return {
        ...state,
        description: action.description,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
