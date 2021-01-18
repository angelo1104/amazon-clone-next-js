import React from "react";
import styles from "./SellerHeader.module.css";
import Link from "next/link";

function SellerHeader() {
  return (
    <div className={styles.seller_header}>
      <h3 className={styles.seller_heading}>Sell on Amazon</h3>

      <Link href={"/seller/products/auth/login"}>
        <button className={styles.seller_button} type="submit">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default SellerHeader;
