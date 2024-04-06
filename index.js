const express = require('express')
const mongoose = require('mongoose')
const app = express()

const productRoute = require('./routes/product.route.js')

app.use(express.json())

app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send("Hello from node API Server")
})

mongoose.connect("mongodb+srv://pariyakittinakrub:1CguqgYsM1S4C6hj@backenddb.1rmkivk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("database connected!")
    app.listen(3000, () => {
        console.log("Server is running on PORT 3000")
    })
})
.catch((err) => {
    console.log(err)
})