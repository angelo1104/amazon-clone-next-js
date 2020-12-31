import React from "react";
import DashBoardCreateProductContainer from "../../../../Components/Seller/DashBoard/DashBoardHome/DashBoardMain/DashBoardCreateProductContainer/DashBoardCreateProductContainer";
import { ProductContextProvider } from "../../../../ContextApi/ProductProvider";
import productReducer, {
  productInitialState,
} from "../../../../ContextApi/productReducer";
import DashBoardCreateProductCancel from "../../../../Components/Seller/DashBoard/DashBoardHome/DashBoardMain/DashBoardCreateProductCancel/DashBoardCreateProductCancel";
import { useRouter } from "next/router";

function CreateProductPage() {
  const router = useRouter();
  return (
    <div className={"create-product-div"}>
      <ProductContextProvider
        initialState={productInitialState}
        reducer={productReducer}
      >
        <DashBoardCreateProductContainer />
        <DashBoardCreateProductCancel router={router} />
      </ProductContextProvider>
    </div>
  );
}

export default CreateProductPage;
