import React from "react";
import { useRouter } from "next/router";
import Product from "../../Components/Product/Product";

function ProductPage() {
  const router = useRouter();
  const { q } = router.query;

  return <Product productID={q} />;
}

export default ProductPage;
