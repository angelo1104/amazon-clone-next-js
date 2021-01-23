import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";
import { useRouter } from "next/router";
import Lottie from "lottie-react-web";
import spinner from "../../../lottie/ios-loader.json";
import { Auth } from "aws-amplify";
import { useStateValue } from "../../../ContextApi/StateProvider";
import { setUser } from "../../../ContextApi/actions";
import ReactCodeInput from "react-code-input";

function Login() {
  const router = useRouter();

  const { redirect } = router.query;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const [activateCode, setActivateCode] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const [{}, dispatch] = useStateValue();

  const verifyCodeAndSignIn = async (email, code) => {
    setProcessing(true);

    try {
      const confirmation = await Auth.confirmSignUp(email, code);

      const user = await Auth.signIn({
        username: email,
        password,
      });

      if (redirect) router.replace(`${redirect}`);
      else router.replace("/");
      setProcessing(false);
    } catch (error) {
      console.log("code error", error);
      setCodeError(error.message);
      setProcessing(false);
    }
  };

  useEffect(() => {
    if (codeError && code) {
      setCode("");
    }
  }, [codeError]);

  useEffect(() => {
    console.log("coder", code);
  }, [code]);

  useEffect(() => {
    if (code.length === 6) {
      //confirm it
      verifyCodeAndSignIn(email, code);
    }
  }, [code]);

  const signIn = async () => {
    setProcessing(true);

    try {
      const user = await Auth.signIn({
        username: email,
        password: password,
      });

      if (redirect) await router.push(`${redirect}`);
      else await router.push("/");

      setProcessing(false);
    } catch (error) {
      console.log("error:", error);

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
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (email === "" || password === "") {
      setError("Please fill out all the fields");
      setProcessing(false);
    } else {
      try {
        await signIn();
      } catch (error) {
        setProcessing(false);
        setError(error.message);
      }
    }
  };

  const goToSignUp = (event) => {
    event.preventDefault();

    router.push(
      redirect
        ? `/auth/email/sign-up?redirect=${redirect}`
        : "/auth/email/sign-up"
    );
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

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(email);
      setCodeError("Sent code on your email.");
    } catch (e) {
      console.log(e);
      setCodeError(error.message);
    }
  };

  return (
    <div className={styles.login}>
      <Link href={"/"}>
        <img
          className={styles.amazon_logo}
          src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
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
              placeholder={"password"}
              style={{ background: processing && "#ff9900b0 !important" }}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.login_input}
              type="password"
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
              <Link
                href={
                  redirect
                    ? `/auth/email/password-reset?redirect=${redirect}`
                    : "/auth/email/password-reset"
                }
              >
                <a className={styles.amazon_link}>Forgot Password?</a>
              </Link>
            </div>
          </form>

          <div className={styles.divider}>
            <h5 className={styles.divider_title}>New to Amazon?</h5>
          </div>

          <button
            disabled={processing}
            onClick={goToSignUp}
            type={"submit"}
            className={styles.go_to_signup_button}
          >
            Create your Amazon account
          </button>
        </>
      )}

      {activateCode && (
        <div>
          <form className={styles.code_form}>
            <h3 className={styles.title}>
              Please enter the code sent on your email.
            </h3>

            <p className={styles.code_error}>{codeError}</p>

            <ReactCodeInput
              type={"number"}
              fields={6}
              name={"active code"}
              inputMode={"numeric"}
              onChange={(code) => setCode(code.toString())}
              disabled={processing}
              value={code}
              inputStyle={{
                fontFamily: "Inter, sans-serif",
                borderRadius: "6px",
                border: "1px solid lightgrey",
                boxShadow: "rgb(0 0 0 / 10%) 0px 0px 10px 0px",
                margin: "4px",
                paddingLeft: "8px",
                width: "36px",
                height: "42px",
                fontSize: "32px",
                boxSizing: "border-box",
                color: "black",
                backgroundColor: "white",
              }}
            />

            <p className={styles.resend_code} onClick={() => resendCode()}>
              Resend Code
            </p>
          </form>
        </div>
      )}

      <AuthFooter />
    </div>
  );
}

export default Login;
