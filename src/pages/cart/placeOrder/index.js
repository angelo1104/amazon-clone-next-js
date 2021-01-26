import React from "react";
import PlaceOrder from "../../../Components/PlaceOrder/PlaceOrder";
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";

function PLaceOrderPage() {
  const stripePromise = loadStripe(
    "pk_test_51HRUplG7mYQXcjRQLgPD5Y9RtRiNYSqgfEEy8KezalgBXUNRMfpqnja5Ht0GHgOHpiZo5dobSXRuDMuGiZsU4fYf00iPpQBrTM"
  );

  return (
    <Elements stripe={stripePromise}>
      <PlaceOrder />
    </Elements>
  );
}

export default PLaceOrderPage;
