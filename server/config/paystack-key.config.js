const PAYSTACK_SECRET = (process.env.ENVIRONMENT = "development"
  ? process.env.PAYSTACK_TEST_SECRET
  : process.env.PAYSTACK_LIVE_SECRET);

module.exports = { PAYSTACK_SECRET };
