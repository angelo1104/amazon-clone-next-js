import React, { useEffect } from "react";
import SignUp from "../../../Components/Auth/SignUp/SignUp";
import nookie from "nookies";
import authInstance from "../../../axios/authInstance";
import URL from "url";

function SignUpPage({ user }) {
  useEffect(() => {
    if (user) {
      console.log("This is cookie user --->>>", user);
    } else {
      console.log("Out of cookies...");
    }
  }, []);

  return (
    <div className="sign-up">
      <SignUp />
    </div>
  );
}

export default SignUpPage;

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
