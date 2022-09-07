// import mongoose from 'mongoose';
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        FoodItemName:String,
        Price:String,
        Rating:String,
        ShopName:String,
        VN:String,
        Count:String,
        RatedPeople:String
    }
)

module.exports = Items = mongoose.model("itemname", itemSchema);