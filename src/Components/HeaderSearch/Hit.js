import React, { useEffect } from "react";
import styles from "./HeaderSearch.module.css";
import { useStateValue } from "../../ContextApi/StateProvider";
import { setSearchText } from "../../ContextApi/actions";
import { useRouter } from "next/router";

function Hit({ displayText, selectedItem, index, setValue }) {
  const [{}, dispatch] = useStateValue();
  const router = useRouter();

  useEffect(() => {
    if (selectedItem === index + 1) {
      //if selected
      dispatch(setSearchText(displayText));
    }
  }, [selectedItem, index, displayText]);

  const moveToHit = (event) => {
    dispatch(setSearchText(displayText));
    router.push(`/search?q=${displayText}`);
  };

  return (
    <div
      className={selectedItem === index + 1 ? styles.hitSelect : styles.hit}
      key={index}
      onClick={moveToHit}
    >
      <p className={styles.hit_text}>{displayText}</p>
    </div>
  );
}

export default Hit;
