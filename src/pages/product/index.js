import React from "react";
import Product from "../../Components/Product/Product";
import productInstance from "../../axios/productInstance";

function ProductPage({ product }) {
  return <Product {...product} />;
}

export default ProductPage;

export async function getServerSideProps({ query }) {
  try {
    const response = await productInstance.post("/read", {
      filter: {
        _id: query.q.toString(),
      },
    });

    if (response.status === 200) {
      return {
        props: {
          product: { ...response.data.product },
        },
      };
    } else {
      return {
        props: {},
        redirect: {
          permanent: true,
          destination: "/product/no-such-product",
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {},
      redirect: {
        permanent: true,
        destination: "/product/no-such-product",
      },
    };
  }
}
