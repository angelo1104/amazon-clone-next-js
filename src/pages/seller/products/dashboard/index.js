import React from "react";
import DashBoardHome from "../../../../Components/Seller/DashBoard/DashBoardHome/DashBoardHome";
import { withSSRContext } from "aws-amplify";

function DashBoardHomePage() {
  return (
    <div>
      <DashBoardHome />
    </div>
  );
}

export default DashBoardHomePage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  try {
    const user = await Auth.currentAuthenticatedUser();

    if (user) {
      //she is logged in and she is really hot.
      if (user.attributes["custom:seller"] === "true") {
        return {
          props: {},
        };
      }
    }
  } catch (error) {}

  return {
    redirect: {
      permanent: false,
      destination: "/seller/products",
    },
    props: {},
  };
}
