import React from "react";
import SellerSignUp from "../../../../Components/Seller/SellerAuth/SellerLogin/SellerSignUp/SellerSignUp";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";
import { withSSRContext } from "aws-amplify";

function SellerSignUpPage() {
  return (
    <>
      <SellerSignUp />
    </>
  );
}

export default SellerSignUpPage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  try {
    const user = await Auth.currentAuthenticatedUser();

    if (user?.attributes["custom:seller"] !== "false") {
      console.log(user?.attributes["custom:seller"]);

      return {
        redirect: {
          permanent: false,
          destination: "/seller/products/dashboard",
        },
        props: {},
      };
    }
  } catch (error) {}

  return {
    props: {},
  };
}
