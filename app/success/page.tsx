import SuccessPayment from "@/components/SuccessPayment/SuccessPayment";
import { stripe } from "@/lib/stripe";
import React from "react";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const SuccessPage = async ({ searchParams }: Props) => {
  try {
    const session_id = searchParams?.session_id;

    if (!session_id) return <h1>No session ID found.</h1>;

    const paymentInfo = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent.payment_method"],
    });

    return <SuccessPayment checkoutSession={paymentInfo} />;
  } catch (error) {
    console.error(error);
    return <h1>Checkout Session Data Retrived Successfully </h1>;
  }
};

export default SuccessPage;
