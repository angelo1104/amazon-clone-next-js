import React from "react";
import Login from "../../../Components/Auth/Login/Login";
import { withSSRContext } from "aws-amplify";
import * as URL from "url";

function LoginPage() {
  return (
    <div className="login">
      <Login />
    </div>
  );
}

export default LoginPage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  const { query, req } = ctx;

  const { redirect } = query;

  const redirectUrl = URL.parse(`${redirect}`);

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user", user);
    if (user !== null || user !== undefined) {
      //she is signed in don't let her go though she is hot
      if (req.headers.host === redirectUrl.host) {
        console.log("headers", user);
        return {
          redirect: {
            permanent: true,
            destination: `${redirect}`,
          },
          props: {},
        };
      }

      return {
        redirect: {
          permanent: true,
          destination: "/",
        },
        props: {},
      };
    }
  } catch (error) {
    console.log("error", error);
    //user is not authenticated.
  }
  return {
    props: {},
  };
}
