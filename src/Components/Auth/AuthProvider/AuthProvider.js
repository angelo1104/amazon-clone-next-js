import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useStateValue } from "../../../ContextApi/StateProvider";
import { setCanSell, setDataUser, setUser } from "../../../ContextApi/actions";
import Cookies from "js-cookie";
import authInstance from "../../../axios/authInstance";
import { Auth, Hub } from "aws-amplify";

function AuthProvider({ children }) {
  const [{ user, dataUser }, dispatch] = useStateValue();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((authUser) => {
        if (authUser) {
          dispatch(setUser(authUser));
        } else {
          dispatch(setUser(null));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("Cognito User", user);
  }, [user]);

  useEffect(() => {
    const listener = (data) => {
      switch (data.payload.event) {
        case "signIn":
          const user = data.payload.data;
          console.log("user signed in");
          dispatch(setUser(user));
          break;
        case "signOut":
          console.log("user signed out");
          dispatch(setUser(null));
          break;
      }
    };

    Hub.listen("auth", listener);
  }, []);

  return <>{children}</>;
}

export default AuthProvider;
