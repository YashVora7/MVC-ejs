const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    img: String
});

const productModel = mongoose.model("Product",productSchema);

module.exports = productModel 