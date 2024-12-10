const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    pincode: { type: Number, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    address3: { type: String, required: true },
    amount: { type: String, required: true },
    status: {
      type: String,
      enum: ["Delivered", "Shipped", "Order Confirmed", "Payment Pending", "Order Failed"],
      default: "Order Confirmed",
    },
    location: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
