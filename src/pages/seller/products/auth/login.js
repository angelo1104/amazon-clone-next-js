import React from "react";
import SellerLogin from "../../../../Components/Seller/SellerAuth/SellerLogin/SellerLogin";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";
import { withSSRContext } from "aws-amplify";

function SellerLoginPage() {
  return (
    <>
      <SellerLogin />
    </>
  );
}

export default SellerLoginPage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  try {
    const user = await Auth.currentAuthenticatedUser();

    if (user && user.attributes["custom:seller"] !== "false") {
      //she is beautiful let her she is really hot and sexy. Please kiss me. Be my girlfriend.

      return {
        redirect: {
          permanent: false,
          destination: "/seller/products/dashboard",
        },
      };
    }
  } catch (error) {}

  return {
    props: {},
  };
}
