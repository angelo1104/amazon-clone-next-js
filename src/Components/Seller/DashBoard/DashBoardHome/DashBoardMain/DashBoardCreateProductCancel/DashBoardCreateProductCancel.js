import React from "react";
import { useRouter } from "next/router";
import { useProductValue } from "../../../../../../ContextApi/ProductProvider";

function DashBoardCreateProductCancel() {
  const router = useRouter();
  const [{ processing }] = useProductValue();

  const cancel = (event) => {
    event.preventDefault();

    router.replace("/seller/product/dashboard");
  };

  return (
    <button
      onClick={cancel}
      className={"create-product-cancel"}
      disabled={processing}
    >
      Cancel
    </button>
  );
}

export default DashBoardCreateProductCancel;
