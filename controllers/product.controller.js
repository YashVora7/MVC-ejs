const productModel = require("../models/product.schema")

const createPro = async(req,res) =>{
    let data = await productModel.create(req.body)
    res.send(data)
} 

const getPro = async(req,res) =>{
    let data = await productModel.find()
    res.send(data)
}

const getRender = (req,res) =>{
    res.render('form')
}

module.exports = {createPro, getPro, getRender}