import React, { useEffect, useState } from "react";
import styles from "./SellerSignUp.module.css";
import Link from "next/link";
import AuthFooter from "../../../../Auth/AuthFooter/AuthFooter";
import Lottie from "lottie-react-web";
import spinner from "../../../../../lottie/ios-loader.json";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import CodeInput from "../../../../CodeInput/CodeInput";

function SellerSignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const [activateCode, setActivateCode] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    setError("");
    setProcessing(true);

    if (email === "" || name === "" || password === "" || rePassword === "") {
      setError("Please fill out all the fields");
      setProcessing(false);
    } else if (password !== rePassword) {
      setError("Passwords entered are not same.");
      setProcessing(false);
    } else {
      setProcessing(true);

      try {
        await Auth.signUp({
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

        setActivateCode(true);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setProcessing(false);
      }
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

  const resendCode = async (event) => {
    event.preventDefault();

    try {
      await Auth.resendSignUp(email);
    } catch (error) {
      console.log(error);
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
      console.log(error);
      setCode("");
      setCodeError(error.message);
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    if (code.length === 6 || code.trim()) {
      verifyCodeAndSignIn(email, code);
    }
  }, [code]);

  return (
    <div className={styles.sign_up}>
      <Link href={"/seller/products"}>
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
            placeholder={"name"}
            type={"text"}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={moveToNext}
            className={styles.signup_input}
            placeholder={"email"}
            type={"email"}
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={moveToNext}
            className={styles.signup_input}
            placeholder={"password"}
            type={"password"}
          />

          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className={styles.signup_input}
            placeholder={"re-enter password"}
            type={"password"}
          />

          <p className={styles.error}>{error}</p>

          <button
            disabled={processing}
            className={styles.signup_submit_button}
            style={{ background: processing && "#ff9900b0" }}
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
              <Link href={"/seller/products/auth/login"}>
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

export default SellerSignUp;
