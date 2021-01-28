import React from "react";
import nookie from "nookies";
import authInstance from "../../axios/authInstance";
import ordersInstance from "../../axios/orderInstance";
import Orders from "../../Components/Orders/Orders";
import { withSSRContext } from "aws-amplify";

function OrdersPage({ orders }) {
  return (
    <div>
      <Orders orders={orders} />
    </div>
  );
}

export default OrdersPage;

export async function getServerSideProps(ctx) {
  const { Auth } = withSSRContext(ctx);

  const { req } = ctx;

  try {
    const user = await Auth.currentAuthenticatedUser();
    if (user) {
      //she is logged in and sexy. Please show me your bikini look
      const { data } = await ordersInstance.post("/read-by-customer", {
        customerUsername: user.username,
      });

      return {
        props: {
          orders: data,
        },
      };
    }
  } catch (e) {
    //she is beautiful yet not logged in I have to say you Ea beautiful est.
    return {
      redirect: {
        permanent: false,
        destination: `/auth/email/login?redirect=${req?.headers?.referer}`,
      },
      props: {},
    };
  }

  // try {
  //   const { Auth } = withSSRContext(ctx);
  //
  //   if (firebase) {
  //     const { data } = await authInstance.post("/idToken", {
  //       idToken: firebase,
  //     });
  //
  //     const rawOrders = await ordersInstance.post("/read-by-customer", {
  //       customerUid: data.token.uid,
  //     });
  //
  //     const orders = rawOrders.data;
  //
  //     return {
  //       props: {
  //         user: data,
  //         orders: orders,
  //       },
  //     };
  //   } else {
  //     return {
  //       props: {},
  //       redirect: {
  //         permanent: true,
  //         destination: "/auth/email/login",
  //       },
  //     };
  //   }
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     props: {},
  //     redirect: {
  //       permanent: true,
  //       destination: "/auth/email/login",
  //     },
  //   };
  // }
}
