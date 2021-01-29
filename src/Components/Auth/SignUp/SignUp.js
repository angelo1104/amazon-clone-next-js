import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";
import Lottie from "lottie-react-web";
import spinner from "../../../lottie/ios-loader.json";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import URL from "url";
import CodeInput from "../../CodeInput/CodeInput";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [activateCode, setActivateCode] = useState(false);

  const { redirect } = router.query;

  let redirectUrl = "";

  if (redirect) redirectUrl = URL.parse(redirect.toString());

  const verifyCodeAndSignIn = async (email, code) => {
    setProcessing(true);

    try {
      await Auth.confirmSignUp(email, code);

      await Auth.signIn({
        username: email,
        password,
      });

      setProcessing(false);
      if (redirectUrl?.hostname === location.hostname)
        await router.replace(`${redirect}`);
      else await router.replace("/");
    } catch (error) {
      console.log("code error", error.message);
      setCodeError(error.message);
      setProcessing(false);
    }
  };

  useEffect(() => {
    console.log("codey", codeError);
  }, [codeError]);

  useEffect(() => {
    if (code.length === 6 || code.trim()) {
      //confirm it
      verifyCodeAndSignIn(email, code);
    }
  }, [code]);

  const signUp = async () => {
    try {
      const {} = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          "custom:seller": "false",
          "custom:country": "",
          "custom:state": "",
          "custom:city": "",
          "custom:zip": "",
          address: "",
        },
      });

      setProcessing(false);

      setActivateCode(true);
    } catch (error) {
      console.log("error signing up:", error);
      setProcessing(false);
      setError(error.message);
    }
  };

  const signup = async (event) => {
    event.preventDefault();
    setError("");
    setProcessing(true);

    if (email === "" || name === "" || password === "" || repassword === "") {
      setError("Please fill out all the fields");
      setProcessing(false);
    } else if (password !== repassword) {
      setError("Passwords entered are not same.");
      setProcessing(false);
    } else {
      setProcessing(true);

      await signUp();
    }
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
    <div className={styles.sign_up}>
      <Link href={"/"}>
        <img
          className={styles.amazon_logo}
          src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
          alt=""
        />
      </Link>

      {!activateCode && (
        <form onSubmit={signup} className={styles.signup_form}>
          <h1 className={styles.signup_form_heading}>Create account</h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={moveToNext}
            className={styles.signup_input}
            type="text"
            placeholder={"name"}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={moveToNext}
            className={styles.signup_input}
            type="email"
            placeholder={"email"}
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={moveToNext}
            className={styles.signup_input}
            type="password"
            placeholder={"password"}
          />

          <input
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className={styles.signup_input}
            type="password"
            placeholder={"re-enter password"}
          />

          <p className={styles.error}>{error}</p>

          <button
            disabled={processing}
            style={{ background: processing && "#ff9900b0" }}
            className={styles.signup_submit_button}
            type="submit"
          >
            {!processing ? (
              "Create your Amazon Account"
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

          <p className={styles.signup_terms}>
            By creating an account you agree to the terms & conditions of our
            amazon clone.
          </p>

          <div className={styles.signup_form_already}>
            <div className={styles.signup_gradient}></div>

            <h5 className={styles.signup_already_p}>
              Already have an account?
              <Link
                href={
                  redirectUrl?.hostname === location.hostname
                    ? `/auth/email/login?redirect=${redirect}`
                    : "/auth/email/login"
                }
              >
                <a className={styles.amazon_link_tm}>Sign in -></a>
              </Link>
            </h5>
          </div>
        </form>
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
          </form>

          <p className={styles.resend_code} onClick={() => resendCode()}>
            Resend Code
          </p>
        </div>
      )}

      <AuthFooter />
    </div>
  );
}

export default SignUp;
