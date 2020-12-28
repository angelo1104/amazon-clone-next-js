import React from "react";
import DashBoardCreateProductContainer
    from "../../../../Components/Seller/DashBoard/DashBoardHome/DashBoardMain/DashBoardCreateProductContainer/DashBoardCreateProductContainer";
import {ProductContextProvider} from "../../../../ContextApi/ProductProvider";
import productReducer, {productInitialState} from "../../../../ContextApi/productReducer";

function CreateProductPage() {
    return (
        <div>
            <ProductContextProvider initialState={productInitialState} reducer={productReducer}>
                <DashBoardCreateProductContainer/>
            </ProductContextProvider>
        </div>
    );
}

export default CreateProductPage;