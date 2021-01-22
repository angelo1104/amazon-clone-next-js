import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useStateValue } from "../../../ContextApi/StateProvider";
import { setCanSell, setDataUser, setUser } from "../../../ContextApi/actions";
import Cookies from "js-cookie";
import authInstance from "../../../axios/authInstance";
import { Auth } from "aws-amplify";

function AuthProvider({ children }) {
  const [{ user, dataUser }, dispatch] = useStateValue();

  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser()
      .then((user) => {
        if (user) {
          dispatch(setUser(user));
        } else {
          dispatch(setUser(null));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let checkCookie = (function () {
      let lastCookie = document.cookie; // 'static' memory between function calls

      return async function () {
        let currentCookie = document.cookie;

        if (currentCookie != lastCookie) {
          // something useful like parse cookie, run a callback fn, etc.
          try {
            const user = await Auth.currentAuthenticatedUser();

            if (user) {
              dispatch(setUser(user));
            } else {
              dispatch(setUser(null));
            }
          } catch (error) {
            console.log(error);
          }

          lastCookie = currentCookie; // store latest cookie
        }
      };
    })();

    const setIntervalCookieId = window.setInterval(checkCookie, 100);

    return () => {
      window.clearInterval(setIntervalCookieId);
    };
  }, []);

  useEffect(() => {
    console.log("Cognito User", user);
  }, [user]);

  return <>{children}</>;
}

export default AuthProvider;
