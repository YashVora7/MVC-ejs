
const express = require("express")
const connect = require("./config/db")
const cors = require('cors')
const route = require("./routes/user.routes")
const product_Route = require("./routes/product.routes")
const app = express()
app.use(express.json())


app.use(cors())

app.use(express.urlencoded({extended: true}))

require("dotenv").config()

let port = process.env.port

app.set('view engine', 'ejs')
app.set('views',__dirname+'/view')

app.use(express.static(__dirname+"/public"))

app.use("/user",route)
app.use("/product",product_Route)

app.listen(port,()=>{
    connect()
    console.log("Server on 8090");
})