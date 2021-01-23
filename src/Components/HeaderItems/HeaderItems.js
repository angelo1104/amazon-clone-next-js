import React, { useEffect } from "react";
import styles from "./HeaderItems.module.css";
import cartImg from "../../../public/basket.svg";
import { useStateValue } from "../../ContextApi/StateProvider";
import { useRouter } from "next/router";
import { setSearchText, setUser } from "../../ContextApi/actions";
import Cookies from "js-cookie";
import Link from "next/link";
import { Auth } from "aws-amplify";

function HeaderItems() {
  const [{ user, cart }, dispatch] = useStateValue();
  const router = useRouter();

  useEffect(() => {
    dispatch(setSearchText(""));
  }, []);

  useEffect(() => {
    Cookies.set("cart", cart);
  }, [cart]);

  const goToLogin = () => {
    if (user) {
      Auth.signOut(); //.then(() => dispatch(setUser(null)));
    } else {
      router.push("/auth/email/login");
    }
  };

  return (
    <div className={styles.header_items}>
      <div onClick={goToLogin} className={styles.header_item}>
        <p className={styles.header_item_line1}>
          {user ? "Hi" : "Hello"} {user?.attributes?.name},
        </p>

        <p className={styles.header_item_line2}>
          {user ? "Sign Out" : "Sign In"}
        </p>
      </div>

      <div className={styles.header_item} onClick={goToLogin}>
        <p className={styles.header_item_line1}>
          {user ? "Hi" : "Hello"} {user?.attributes?.name},
        </p>

        <p className={styles.header_item_line2}>
          {user ? "Sign Out" : "Sign In"}
        </p>
      </div>

      <Link href={"/orders"}>
        <div className={styles.header_item}>
          <p className={styles.header_item_line1}>Returns</p>

          <p className={styles.header_item_line2}>& Orders</p>
        </div>
      </Link>

      <Link href={"/cart"}>
        <div className={styles.header_item}>
          <p className={styles.header_item_line2}>
            <img className={styles.header_item_cart} src={cartImg} />

            <span className={styles.header_cart_number}>
              {cart.reduce((accumulator, item) => {
                return accumulator + item.amount;
              }, 0)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HeaderItems;
