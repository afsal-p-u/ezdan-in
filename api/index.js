const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

const dbConnection = require('./utils/db.connection');
dbConnection()

const authRoutes = require('./routes/auth.route');
const productRoutes = require('./routes/product.route');

app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)

app.listen(process.env.PORT, () => console.log("Server running"))