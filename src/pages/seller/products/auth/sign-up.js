import React from "react";
import SellerSignUp from "../../../../Components/Seller/SellerAuth/SellerLogin/SellerSignUp/SellerSignUp";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";

function SellerSignUpPage() {
  return (
    <>
      <SellerSignUp />
    </>
  );
}

export default SellerSignUpPage;

export async function getServerSideProps(ctx) {
  const { firebase } = nookie.get(ctx);

  let user = null;

  if (firebase) {
    user = await authInstance.post("/idtoken", {
      idToken: firebase,
    });

    return {
      redirect: {
        permanent: false,
        destination: "/seller/product/auth/login",
      },
      props: {
        user: user?.data,
      },
    };
  }

  return {
    props: {},
  };
}
