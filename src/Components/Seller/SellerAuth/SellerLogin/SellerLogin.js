import React, { useEffect, useState } from "react";
import styles from "./SellerLogin.module.css";
import Link from "next/link";
import AuthFooter from "../../../Auth/AuthFooter/AuthFooter";
import { useRouter } from "next/router";
import Lottie from "lottie-react-web";
import spinner from "../../../../lottie/ios-loader.json";
import { useStateValue } from "../../../../ContextApi/StateProvider";
import { Auth } from "aws-amplify";
import CodeInput from "../../../CodeInput/CodeInput";

function SellerLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const [activateCode, setActivateCode] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      if (user.attributes["custom:seller"] === "true") {
        router.replace("/seller/products/dashboard");
      }
    }
  }, [user]);

  const submitLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (email === "" || password === "") {
      setError("Please fill out all the fields");
      setProcessing(false);
    } else {
      setProcessing(true);

      try {
        await Auth.signIn({
          username: email,
          password,
        });

        router.push("/seller/products/becomeSeller/login-seller");

        setProcessing(false);
      } catch (error) {
        if (error.code === "UserNotConfirmedException") {
          //send code
          setActivateCode(true);
          setProcessing(false);
          await Auth.resendSignUp(email);
        } else {
          //handle other errors
          setProcessing(false);
          setError(error.message);
        }
      }
    }
  };

  const goToSignUp = (event) => {
    event.preventDefault();

    router.push("/seller/products/auth/sign-up");
  };

  const moveToNext = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const inputs = Array.prototype.slice.call(
        document.querySelectorAll("input")
      );
      const index =
        (inputs.indexOf(document.activeElement) + 1) % inputs.length;
      const input = inputs[index];
      input.focus();
      input.select();
    }
  };

  const resendCode = async (event) => {
    event.preventDefault();

    try {
      await Auth.resendSignUp(email);
      setCodeError("Sent code on your email.");
    } catch (e) {
      console.log(e);
      setCodeError(error.message);
    }
  };

  const verifyCodeAndSignIn = async (email, code) => {
    setProcessing(true);
    try {
      await Auth.confirmSignUp(email, code);
      await Auth.signIn({
        username: email,
        password,
      });

      router.push("/seller/products/becomeSeller/login-seller");
    } catch (error) {
      console.log("code error", error);
      await setCode("");
      setCodeError(error.message);
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    if (code.length === 6 && code.trim()) {
      //confirm it
      verifyCodeAndSignIn(email, code);
    }
  }, [code]);

  return (
    <div className={styles.login}>
      <Link href={"/seller/products"}>
        <img
          className={styles.amazon_logo}
          src={
            "https://images-na.ssl-images-amazon.com/images/G/01/rainier/nav/SellerCentral_Bliss._CB485924389_.png"
          }
          alt=""
        />
      </Link>

      {!activateCode && (
        <>
          <form onSubmit={submitLogin} className={styles.login_form}>
            <h1 className={styles.login_form_heading}>Sign-In</h1>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={moveToNext}
              className={styles.login_input}
              type="email"
              placeholder={"email"}
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.login_input}
              type="password"
              placeholder={"password"}
            />

            <p className={styles.error}>{error}</p>

            <button
              disabled={processing}
              style={{ background: processing && "#ff9900b0" }}
              className={styles.login_submit_button}
              type="submit"
            >
              {!processing ? (
                "Continue"
              ) : (
                <div className={styles.spinner}>
                  <Lottie
                    options={{
                      animationData: spinner,
                    }}
                  />
                </div>
              )}
            </button>

            <p className={styles.login_terms}>
              By continuing over amazon clone you agree to the terms &
              conditions of our amazon clone.
            </p>

            <div className={styles.need_help}>
              <Link href={"/auth/email/password-reset"}>
                <a className={styles.amazon_link}>Forgot Password?</a>
              </Link>
            </div>
          </form>

          {!user && (
            <div className={styles.divider}>
              <h5 className={styles.divider_title}>New to Amazon?</h5>
            </div>
          )}

          {!user && (
            <button
              disabled={processing}
              onClick={goToSignUp}
              type={"submit"}
              className={styles.signup_button}
            >
              Create your Amazon account
            </button>
          )}
        </>
      )}

      {activateCode && (
        <div>
          <form className={styles.code_form}>
            <h3 className={styles.title}>
              Please enter the code sent on your email.
            </h3>

            <p className={styles.code_error}>{codeError}</p>

            <CodeInput
              fields={6}
              onChange={(code) => setCode(code.join(""))}
              disabled={processing}
            />

            <p className={styles.resend_code} onClick={resendCode}>
              Resend Code
            </p>
          </form>
        </div>
      )}

      <AuthFooter />
    </div>
  );
}

export default SellerLogin;
