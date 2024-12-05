const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors())

const authRoutes = require('./routes/auth.route')

app.use('/auth', authRoutes)

app.listen(300, () => console.log("Server running"))