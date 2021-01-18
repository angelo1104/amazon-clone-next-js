import React from "react";
import Login from "../../../Components/Auth/Login/Login";
import nookie from "nookies";
import authInstance from "../../../axios/authInstance";
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
  const { firebase } = nookie.get(ctx);

  const { query, req } = ctx;

  const { redirect } = query;

  const redirectUrl = URL.parse(`${redirect}`);

  let user = null;

  if (firebase) {
    user = await authInstance.post("/idToken", {
      idToken: firebase,
    });

    if (req.headers.host === redirectUrl.host) {
      return {
        redirect: {
          permanent: false,
          destination: `${redirect}`,
        },
        props: {
          user: user?.data,
        },
      };
    }

    return {
      redirect: {
        permanent: false,
        destination: "/",
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
