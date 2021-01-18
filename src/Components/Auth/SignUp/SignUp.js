import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import Link from "next/link";
import AuthFooter from "../AuthFooter/AuthFooter";
import Lottie from "lottie-react-web";
import spinner from "../../../lottie/ios-loader.json";
import authInstance from "../../../axios/authInstance";
import { setDataUser } from "../../../ContextApi/actions";
import { useStateValue } from "../../../ContextApi/StateProvider";
import { auth } from "../../../firebase";
import { useRouter } from "next/router";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user]);

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

      try {
        const authUser = await auth().createUserWithEmailAndPassword(
          email,
          password
        );

        await authUser.user.updateProfile({
          displayName: name,
        });

        const doc = await authInstance.post("/new/user", {
          name: name,
          email: email,
          seller: false,
          uid: authUser.user.uid,
        });

        dispatch(setDataUser(doc.data));
        setProcessing(false);
      } catch (error) {
        setProcessing(false);
        setError(error.message);
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

  return (
    <div className={styles.sign_up}>
      <Link href={"/"}>
        <img
          className={styles.amazon_logo}
          src="https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png"
          alt=""
        />
      </Link>

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
            <Link href={"/auth/email/login"}>
              <a className={styles.amazon_link_tm}>Sign in -></a>
            </Link>
          </h5>
        </div>
      </form>

      <AuthFooter />
    </div>
  );
}

export default SignUp;
