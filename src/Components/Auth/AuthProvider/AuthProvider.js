import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useStateValue } from "../../../ContextApi/StateProvider";
import { setCanSell, setDataUser, setUser } from "../../../ContextApi/actions";
import Cookies from "js-cookie";
import authInstance from "../../../axios/authInstance";
import { Auth } from "aws-amplify";

function AuthProvider({ children }) {
  const [{ user, dataUser }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        authInstance
          .post("/user", {
            filter: {
              email: authUser.email,
              uid: authUser.uid,
            },
          })
          .then((response) => {
            dispatch(setDataUser(response.data));
            dispatch(setCanSell(response.data.seller));
          })
          .catch((error) => {
            console.log(error);
          });
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
        dispatch(setDataUser(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log("Firebase User", user, "Data User", dataUser);
  }, [user, dataUser]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    auth().onIdTokenChanged(async (authUser) => {
      if (authUser) {
        const token = await authUser.getIdToken();
        Cookies.set("firebase", token);
      } else {
        Cookies.remove("firebase");
      }
    });
  }, []);

  return <>{children}</>;
}

export default AuthProvider;
