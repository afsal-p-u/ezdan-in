const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      "http://localhost:5599",
      process.env.PROD_CLIENT_URL1,
      process.env.PROD_CLIENT_URL2,
    ],
    credentials: true,
  })
);

const dbConnection = require("./utils/db.connection");
dbConnection();

const authRoutes = require("./routes/auth.route");
const productRoutes = require("./routes/product.route");
const paymentRoutes = require("./routes/payment.route");

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(process.env.PORT, () => console.log("Server running"));
