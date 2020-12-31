import { productActionTypes } from "./productsActions";

export const productInitialState = {
  page: 0,
  features: [""],
  name: "",
  brand: "",
  pickupAddress: "",
  shortDescription: "",
  description: "",
  avatar: [],
  avatarUrl: "",
  images: [],
  imagesUrls: [],
  price: 0,
  searchTerm: "",
  processing: true,
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
    case productActionTypes.setAvatar:
      return {
        ...state,
        avatar: action.avatar,
      };
    case productActionTypes.setAvatarUrl:
      return {
        ...state,
        avatarUrl: action.avatarUrl,
      };
    case productActionTypes.setImages:
      return {
        ...state,
        images: action.images,
      };
    case productActionTypes.setImagesUrl:
      return {
        ...state,
        imagesUrls: action.imagesUrl,
      };
    case productActionTypes.setPrice:
      return {
        ...state,
        price: action.price,
      };
    case productActionTypes.setSearchTerm:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case productActionTypes.setFormProcessing:
      return {
        ...state,
        processing: action.processing,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
