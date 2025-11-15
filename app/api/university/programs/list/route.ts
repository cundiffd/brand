// Copyright © Spatial Corporation. All rights reserved.

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Get a list of university programs.
 */
export const GET = async () => {
  const products = await stripe.products.list({ active: true, limit: 100 });
  const programs = products.data.filter((p) => p.metadata.type === "program");

  const now = Date.now();

  const enriched = await Promise.all(
    programs.map(async (product) => {
      if (product.metadata.deadline && new Date(product.metadata.deadline).getTime() <= now) {
        return null;
      }

      const prices = await stripe.prices.list({ product: product.id, active: true, limit: 1 });
      const price = prices.data[0];

      return {
        id: product.id,
        ...product.metadata,
        price: price.unit_amount / 100,
        price_id: price.id,
        currency: "usd"
      };
    })
  );

  return NextResponse.json(enriched.filter(Boolean));
};
