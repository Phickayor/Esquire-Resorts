//  PROVIDE PAYMENT INFO
exports.confirmpayment= (req, res) => {
    const reference = req.params.reference;
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: `/transaction/verify/${reference}`,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + process.env.PAYSTACK_SECRET
      }
    };
  
    fetch(`https://${options.hostname}${options.path}`, {
      method: options.method,
      headers: options.headers,
    })
      .then(response => response.json())
      .then(data => res.json(data))
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  }