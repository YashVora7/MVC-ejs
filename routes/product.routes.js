const {Router} = require('express') 
const { createPro, getPro, getRender } = require('../controllers/product.controller')
const product_Route = Router()

product_Route.post("/create",createPro)
product_Route.get("/get",getPro)
product_Route.get("/get/data",getRender)


module.exports = product_Route