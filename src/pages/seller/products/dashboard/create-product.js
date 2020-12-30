import React from "react";
import DashBoardCreateProductContainer from "../../../../Components/Seller/DashBoard/DashBoardHome/DashBoardMain/DashBoardCreateProductContainer/DashBoardCreateProductContainer";
import { ProductContextProvider } from "../../../../ContextApi/ProductProvider";
import productReducer, {
  productInitialState,
} from "../../../../ContextApi/productReducer";
import { useRouter } from "next/router";

function CreateProductPage() {
  const router = useRouter();

  const cancel = (event) => {
    event.preventDefault();

    router.replace("/seller/products/dashboard");
  };

  return (
    <div className={"create-product-div"}>
      <ProductContextProvider
        initialState={productInitialState}
        reducer={productReducer}
      >
        <DashBoardCreateProductContainer />
        <button onClick={cancel} className={"create-product-cancel"}>
          Cancel
        </button>
      </ProductContextProvider>
    </div>
  );
}

export default CreateProductPage;
