// import mongoose from 'mongoose';
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        ManId:String,
        FoodId:String,
        FoodItemName:String,
        Price:String,
        Rating:String,
        ShopName:String,
        VN:String
    }
)

module.exports = Fav = mongoose.model("fav", itemSchema);