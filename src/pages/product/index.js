import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Product from "../../Components/Product/Product";
import productInstance from "../../axios/productInstance";

function ProductPage({ product }) {
  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    console.log(product);
  }, []);

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
