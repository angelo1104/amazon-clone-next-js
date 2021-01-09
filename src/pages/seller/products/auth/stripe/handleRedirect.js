import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

function HandleRedirectPage() {
  //ADD ACCOUNT ID AND OTHER STUFF

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/seller/product/dashboard");
    }, 5000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Hell you went successfully.</h1>

        <p className={styles.description}>Redirecting you to dashboard</p>
      </div>
    </div>
  );
}

export default HandleRedirectPage;
