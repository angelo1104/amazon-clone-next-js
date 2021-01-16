import React from "react";
import Login from "../../../Components/Auth/Login/Login";
import nookie from "nookies";
import authInstance from "../../../axios/authInstance";

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

  let user = null;

  if (firebase) {
    user = await authInstance.post("/idToken", {
      idToken: firebase,
    });

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
