const { Cashfree } = require("cashfree-pg");

const CreateOrder = (req, res) => {
  Cashfree.XClientId = process.env.XCLIENT_ID;
  Cashfree.XClientSecret = process.env.XCLIENT_SECRET;

  // if (process.env.CASHFREE_TYPE == "production") {
    Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
  // } else {
    // Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
  // }

  const date = new Date();
  const expiryDate = new Date(date); 
  expiryDate.setDate(expiryDate.getDate() + 1);

  var request = {
    order_amount: req.body.amount,
    order_currency: "INR",
    order_id: `ezdan_${req.body.name + expiryDate}`,
    customer_details: {
      customer_id: req.body.name+req.body.phone,
      customer_phone: req.body.phone,
      customer_name: req.body.name,
      customer_email: req.body.email, 
    },
    order_meta: {
      return_url:
        // "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}",
        "https://ezdan.store/order",
      notify_url:
        "https://www.cashfree.com/devstudio/preview/pg/webhooks/61559637",
      payment_methods: "cc,dc,upi",
    },
    order_expiry_time: expiryDate,
    order_note: "Ezdan Orders",
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
