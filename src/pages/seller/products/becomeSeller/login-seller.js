import React from "react";
import { useStateValue } from "../../../../ContextApi/StateProvider";
import BecomeSellerLogin from "../../../../Components/Seller/SellerAuth/BecomeSeller/BecomeSellerLogin/BecomeSellerLogin";
import nookie from "nookies";
import authInstance from "../../../../axios/authInstance";

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
  const { firebase } = nookie.get(ctx);

  let user = null;

  if (firebase) {
    user = await authInstance.post("/idToken", {
      idToken: firebase,
    });
  }

  const redirect = {
    permanent: false,
    destination: "/seller/product/dashboard",
  };

  if (user.data.user.seller) {
    return {
      redirect: redirect,
      props: {
        user: user?.data,
      },
    };
  }

  if (!user.data.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/seller/product",
      },
      props: {
        user: user?.data,
      },
    };
  }

  return {
    props: {
      user: user?.data,
    },
  };
}
