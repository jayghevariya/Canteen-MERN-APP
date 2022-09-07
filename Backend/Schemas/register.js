// import mongoose from 'mongoose';
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const registerSchema = new Schema(
    {
        VB: String,
        ShopName: String,
        ManagerName: String,
        Email: String,
        Password: String,
        MobileNo: String,
        OpenTime: String,
        CloseTime: String,
        Name: String,
        Age: String,
        Year: String,
        Wallet: String

    }
)

module.exports = Register = mongoose.model("Register",registerSchema);