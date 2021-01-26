import React, { useEffect } from "react";
import DashBoardHeader from "./DashBoardHeader/DashBoardHeader";
import DashBoardMain from "./DashBoardMain/DashBoardMain";
import DashBoardFooter from "./DashBoardFooter/DashBoardFooter";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

function DashBoardHome() {
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        if (!user) {
          //she is signed in
          router.replace("/seller/products/auth/sign-up");
        } else if (user.attributes["custom:seller"] === "true") {
          //she is a seller
          router.replace("/seller/products/dashboard");
        }
      })
      .catch((error) => {
        router.replace("/seller/products/auth/sign-up");
      });
  }, []);

  return (
    <div>
      <DashBoardHeader />
      <DashBoardMain />
      <DashBoardFooter />
    </div>
  );
}

export default DashBoardHome;
