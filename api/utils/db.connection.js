const mongoose = require('mongoose')

const dbConnection = () => mongoose.connect((process.env.MONGO_URL)).then((res) => {
    console.log('DB Connection Successfull')
}).catch((err) => {
    console.log('Error Connecting DB, Error: ', err) 
})

module.exports = dbConnection;