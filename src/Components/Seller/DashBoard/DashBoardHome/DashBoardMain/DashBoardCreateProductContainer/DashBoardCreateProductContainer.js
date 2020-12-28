import React from "react";
import DashBoardCreateProduct from "../DashBoardCreateProduct/DashBoardCreateProduct";
import DashBoardCreateProductImages from "../DashBoardCreateProductImages/DashBoardCreateProductImages";
import DashBoardCreateProductLegals from "../DashBoardCreateProductLegals/DashBoardCreateProductLegals";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";
import { setFormPage } from "../../../../../../ContextApi/productsActions";

function DashBoardCreateProductContainer() {
  const [{ page }, dispatch] = useProductValue();

  const setPage = (pageNumber) => {
    dispatch(setFormPage(pageNumber));
  };

  switch (page) {
    case 1:
      return <DashBoardCreateProduct setPage={setPage} />;
    case 2:
      return <DashBoardCreateProductImages setPage={setPage} page={page} />;
    case 3:
      return <DashBoardCreateProductLegals setPage={setPage} page={page} />;
    default:
      return <DashBoardCreateProduct setPage={setPage} />;
  }
}

export default DashBoardCreateProductContainer;
