import React from "react";
import nookie from "nookies";
import authInstance from "../../axios/authInstance";
import ordersInstance from "../../axios/orderInstance";
import Orders from "../../Components/Orders/Orders";

function OrdersPage({ orders }) {
  return (
    <div>
      <Orders orders={orders} />
    </div>
  );
}

export default OrdersPage;

export async function getServerSideProps(ctx) {
  try {
    const { firebase } = nookie.get(ctx);

    if (firebase) {
      const { data } = await authInstance.post("/idToken", {
        idToken: firebase,
      });

      const rawOrders = await ordersInstance.post("/read-by-customer", {
        customerUid: data.token.uid,
      });

      const orders = rawOrders.data;

      return {
        props: {
          user: data,
          orders: orders,
        },
      };
    } else {
      return {
        props: {},
        redirect: {
          permanent: true,
          destination: "/auth/email/login",
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {},
      redirect: {
        permanent: true,
        destination: "/auth/email/login",
      },
    };
  }
}
