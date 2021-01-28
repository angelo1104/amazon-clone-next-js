import React from "react";
import SellerSignUp from "../../../../Components/Seller/SellerAuth/SellerLogin/SellerSignUp/SellerSignUp";
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

    if (user && user?.attributes["custom:seller"] !== "false") {
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
