const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    otherInfo: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    amount: { type: String, required: true },
    status: {
      type: String,
      enum: ["Delivered", "Shipped", "Order Confirmed", "Payment Pending", "Order Failed"],
      default: "Payment Pending",
    },
    orderedItems: { type: Array, default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
