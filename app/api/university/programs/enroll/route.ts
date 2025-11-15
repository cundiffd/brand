// Copyright © Spatial Corporation. All rights reserved.

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Enroll in a university program.
 * @param request A request sent to the server.
 */
export const POST = async (request: NextRequest) => {
  const { price, success_url, cancel_url } = await request.json();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price, quantity: 1 }],
    success_url,
    cancel_url,
    allow_promotion_codes: true
  });

  return NextResponse.json({ url: session.url });
};
