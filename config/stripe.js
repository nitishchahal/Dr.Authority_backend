import Stripe from "stripe";

console.log(
  "Stripe key prefix:",
  process.env.STRIPE_SECRET_KEY?.slice(0, 12)
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default stripe;