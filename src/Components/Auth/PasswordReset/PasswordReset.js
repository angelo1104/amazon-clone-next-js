import React, { useEffect, useState } from "react";
import styles from "./PasswordReset.module.css";
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";
import { auth } from "../../../firebase";
import Lottie from "lottie-react-web";
import spinner from "../../../lottie/ios-loader.json";
import { Auth } from "aws-amplify";
import ReactCodeInput from "react-code-input";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [activateCode, setActivateCode] = useState(false);

  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const submitPasswordReset = async (event) => {
    event.preventDefault();
    setMessage("");

    setProcessing(true);

    try {
      if (validatePassword(password, rePassword)) {
        await Auth.forgotPassword(email);
        setActivateCode(true);
      }
    } catch (error) {
      console.log(error);

      if (error.code === "UserNotFoundException")
        setMessage("User with such an email is not found.");
      else setMessage(error.message);
    } finally {
      setProcessing(false);
    }
  };

  const resendCode = async () => {
    try {
      if (validatePassword()) {
        await Auth.forgotPassword(email);
        setCodeError("Sent code on your email.");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const validatePassword = (password, rePassword) => {
    const lowerCaseLetters = /[a-z]/g;

    if (password !== rePassword) {
      setMessage("Password entered do not match.");
      return false;
    } else {
      if (!password.match(lowerCaseLetters)) {
        setMessage("Password must contain one lower-case letter.");
        return false;
      }

      // Validate capital letters
      const upperCaseLetters = /[A-Z]/g;
      if (!password.match(upperCaseLetters)) {
        setMessage("Password must contain one upper-case letter.");
        return false;
      }

      // Validate numbers
      const numbers = /[0-9]/g;
      if (!password.match(numbers)) {
        setMessage("Password must contain one number.");
        return false;
      }

      // Validate length
      if (!(password.length >= 8)) {
        setMessage("Password must be at-least 8 letters.");
        return false;
      }

      return true;
    }
  };

  useEffect(() => {
    if (code.length === 6) {
    }
  }, [code]);

  return (
    <div className={styles.password_reset}>
      <Link href={"/"}>
        <img
          className={styles.amazon_logo}
          src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
          alt=""
        />
      </Link>

      {!activateCode && (
        <form
          onSubmit={submitPasswordReset}
          className={styles.password_reset_form}
        >
          <h1 className={styles.password_reset_form_heading}>
            Password assistance
          </h1>

          <input
            placeholder={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.password_reset_input}
            type="email"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.password_reset_input}
            placeholder={"new  password"}
          />

          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className={styles.password_reset_input}
            placeholder={"re-enter  password"}
          />

          <p className={styles.message}>{message}</p>

          <button
            disabled={processing}
            style={{ background: processing && "#ff9900b0" }}
            className={styles.password_reset_submit_button}
            type="submit"
          >
            {!processing ? (
              "Send Code"
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
        </form>
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

            <p className={styles.resend_code} onClick={(e) => resendCode()}>
              Resend Code
            </p>
          </form>
        </div>
      )}

      <AuthFooter />
    </div>
  );
}

export default PasswordReset;
