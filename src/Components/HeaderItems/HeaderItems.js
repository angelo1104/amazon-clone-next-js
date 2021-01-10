import React from "react";
import styles from "./HeaderItems.module.css";
import cartImg from "../../../public/basket.svg";
import { useStateValue } from "../../ContextApi/StateProvider";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

function HeaderItems() {
  const [{ user, cart }] = useStateValue();
  const router = useRouter();

  const goToLogin = () => {
    if (user) {
      auth().signOut();
    } else {
      router.push("/auth/email/login");
    }
  };

  return (
    <div className={styles.header_items}>
      <div onClick={goToLogin} className={styles.header_item}>
        <p className={styles.header_item_line1}>
          {user ? "Hi" : "Hello"} {user?.displayName},
        </p>

        <p className={styles.header_item_line2}>
          {user ? "Sign Out" : "Sign In"}
        </p>
      </div>

      <div className={styles.header_item} onClick={goToLogin}>
        <p className={styles.header_item_line1}>
          {user ? "Hi" : "Hello"} {user?.displayName},
        </p>

        <p className={styles.header_item_line2}>
          {user ? "Sign Out" : "Sign In"}
        </p>
      </div>

      <div className={styles.header_item}>
        <p className={styles.header_item_line1}>Returns</p>

        <p className={styles.header_item_line2}>& Orders</p>
      </div>

      <div className={styles.header_item}>
        <p className={styles.header_item_line2}>
          <img className={styles.header_item_cart} src={cartImg} />

          <span className={styles.header_cart_number}>{cart?.length}</span>
        </p>
      </div>
    </div>
  );
}

export default HeaderItems;
