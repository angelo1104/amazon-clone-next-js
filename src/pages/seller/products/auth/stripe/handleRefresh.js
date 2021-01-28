import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useStateValue } from "../../../../../ContextApi/StateProvider";

function HandleRefresh({ user }) {
  const router = useRouter();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // authInstance
    //   .patch("/update/user", {
    //     filter: {
    //       email: user.user.email,
    //       uid: user.user.uid,
    //     },
    //     update: {
    //       accountID: "",
    //     },
    //   })
    //   .then((res) => {
    //     router.replace("/seller/product/dashboard");
    //
    //     dispatch(setDataUser(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    //remove account id

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.description}>
          It was unsuccessful of you a piece of shit.
        </p>

        <p className={styles.description}>
          You tried to betray me you son of a bitch. Next time if I saw you
          hanging on this page. I will kick your ass to a toilet. Go gave you a
          chance
        </p>
      </div>
    </div>
  );
}

export default HandleRefresh;

export async function getServerSideProps(ctx) {
  // const { firebase } = nookie.get(ctx);
  //
  // let user = null;
  //
  // if (firebase) {
  //   user = await authInstance.post("/idtoken", {
  //     idToken: firebase,
  //   });
  //
  //   return {
  //     props: {
  //       user: user.data,
  //     },
  //   };
  // }

  return {
    props: {},
  };
}
