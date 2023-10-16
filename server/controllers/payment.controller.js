const verify_payment = async (req, res) => {
  try {
    var ref = req.params.reference;
    var url = `https://api.paystack.co/transaction/verify/${ref}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.PAYSTACK_SECRET,
      },
    };
    let response = await fetch(url, options);
    let result = await response.json();
    res.status(200).json({ result });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

module.exports = verify_payment;
