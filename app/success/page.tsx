import SuccessPayment from "@/components/SuccessPayment/SuccessPayment";
import { stripe } from "@/lib/stripe";
import React from "react";

type Props = {
  searchParams?: Promise<{ session_id: string | undefined }>;
};

const SuccessPage = async ({ searchParams }: Props) => {
  try {
    const data = await searchParams;
    const session_id = data?.session_id;

    if (!session_id || typeof session_id !== "string") {
      return <h1>No session ID found.</h1>;
    }

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
