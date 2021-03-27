import React from "react";
import styles from "./SubHeaderCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function SubHeaderCard({ title, link = "#" }) {
  const router = useRouter();

  return (
    <div className={styles.sub_header_card}>
      <p className={styles.sub_header_title} onClick={() => router.push(link)}>
        {title}
      </p>
    </div>
  );
}

export default SubHeaderCard;
