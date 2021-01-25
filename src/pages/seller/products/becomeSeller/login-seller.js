import React from "react";
import BecomeSellerLogin from "../../../../Components/Seller/SellerAuth/BecomeSeller/BecomeSellerLogin/BecomeSellerLogin";
import { withSSRContext } from "aws-amplify";

function BecomeLoginSellerPage() {
  return (
    <div>
      <BecomeSellerLogin />
    </div>
  );
}

export default BecomeLoginSellerPage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  try {
    const user = await Auth.currentAuthenticatedUser();

    if (user && user?.attributes["custom:seller"] === "true") {
      //she is beautiful and she is a seller. Let's send her to dashboard and maybe she will offer us a date and night and even a kiss. You are pretty.
      return {
        redirect: {
          permanent: false,
          destination: "/seller/products/dashboard",
        },
        props: {},
      };
    }
  } catch (e) {
    //she is not yet with us let's add her to our list.
    console.log("eeee", e);
    return {
      redirect: {
        permanent: false,
        destination: "/seller/products/auth/login",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}
