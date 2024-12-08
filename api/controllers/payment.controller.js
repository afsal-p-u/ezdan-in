const { Cashfree } = require("cashfree-pg");

const CreateOrder = (req, res) => {
  Cashfree.XClientId = process.env.XCLIENT_ID;
  Cashfree.XClientSecret = process.env.XCLIENT_SECRET;
  Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

  var request = {
    order_amount: req.body.amount,
    order_currency: "INR",
    order_id: `ezdan_${req.body.name + req.body.phone}`,
    customer_details: {
      customer_id: req.body.name+req.body.phone,
      customer_phone: req.body.phone,
      customer_name: req.body.name,
      customer_email: req.body.email, 
    },
    order_meta: {
      return_url:
        "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}",
      notify_url:
        "https://www.cashfree.com/devstudio/preview/pg/webhooks/61559637",
      payment_methods: "cc,dc,upi",
    },
    order_expiry_time: "2024-12-09T11:16:45.805Z",
    order_note: "Sample Order Note",
    order_tags: {
      name: "Developer",
      company: "Cashfree",
    },
  };

  Cashfree.PGCreateOrder("2023-08-01", request)
    .then((response) => {
      console.log("Order created successfully:", response.data);
      return res.status(200).json(response.data)
    })
    .catch((error) => {
      console.error("Error:", error.response.data.message);
      return res.status(500).json(error.response.data.message)
    });
};

module.exports = { CreateOrder };
