// import mongoose from 'mongoose';
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        ManId:String,
        FoodId:String,
        TimeHour:String,
        TimeMin:String,
        FoodItemName:String,
        Price:String,
        TotalPrice:String,
        Rating:String,
        ShopName:String,
        VN:String,
        Status:String,
        Next:String
    }
)

module.exports = Order = mongoose.model("Pendingorder", itemSchema);