import React, { useEffect } from "react";
import SignUp from "../../../Components/Auth/SignUp/SignUp";
import nookie from "nookies";
import authInstance from "../../../axios/authInstance";
import URL from "url";
import { withSSRContext } from "aws-amplify";

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
  const { Auth } = withSSRContext(ctx);

  const { query, req } = ctx;

  const { redirect } = query;

  const redirectUrl = URL.parse(`${redirect}`);

  try {
    const user = await Auth.currentAuthenticatedUser();
    if (user !== null || user !== undefined) {
      //she is signed in don't let her go though she is hot
      if (req.headers.host === redirectUrl.host) {
        console.log("she is beautiful");
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
    //user is not authenticated.
  }
  return {
    props: {},
  };
}
