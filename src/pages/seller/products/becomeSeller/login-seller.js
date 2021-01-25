import React from "react";
import { useStateValue } from "../../../../ContextApi/StateProvider";
import BecomeSellerLogin from "../../../../Components/Seller/SellerAuth/BecomeSeller/BecomeSellerLogin/BecomeSellerLogin";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";
import { withSSRContext } from "aws-amplify";

function BecomeLoginSellerPage({ user }) {
  const [{ dataUser, canSell }, dispatch] = useStateValue();

  let widget = <div>Nothing here</div>;

  if (dataUser && !canSell) {
    widget = <div>I will make u a guy</div>;
  } else if (!dataUser) {
    widget = <div>Go to login</div>;
  } else if (canSell) {
    widget = <div>Sorry you are a guy</div>;
  }

  return (
    <div>
      <BecomeSellerLogin isUser={user} />
    </div>
  );
}

export default BecomeLoginSellerPage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  try {
    const user = await Auth.currentAuthenticatedUser();

    console.log("at", user.attributes["custom:seller"]);
    if (user.attributes["custom:seller"] === "false") {
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
