const productActionTypes = {
  setPage: "SET_PAGE",
  setFeatures: "SET_FEATURES",
  setName: "SET_NAME",
  setBrand: "SET_BRAND",
  setPickupAddress: "SET_PICKUP_ADDRESS",
  setShortDescription: "SET_SHORT_DESCRIPTION",
  setDescription: "SET_DESCRIPTION",
  setAvatar: "SET_AVATAR",
  setAvatarUrl: "SET_AVATAR_URL",
  setImages: "SET_IMAGES",
  setImagesUrl: "SET_IMAGES_URL",
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

const setFormAvatar = (payload) => ({
  type: productActionTypes.setAvatar,
  avatar: payload,
});

const setFormAvatarUrl = (payload) => ({
  type: productActionTypes.setAvatarUrl,
  avatarUrl: payload,
});

const setFormImages = (payload) => ({
  type: productActionTypes.setImages,
  images: payload,
});

const setFormImagesUrl = (payload) => ({
  type: productActionTypes.setImagesUrl,
  imagesUrl: payload,
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
  setFormAvatar,
  setFormAvatarUrl,
  setFormImages,
  setFormImagesUrl,
};
