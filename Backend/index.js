// import express from 'express'
// import cors from 'cors'
// import mongoose from 'mongoose'
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Register = require('./Routes/register-login')
const ProfileBuyer = require('./Routes/profile-buyer')
const ProfileVendor = require('./Routes/profile-vendor')
const Buyer = require('./Routes/buyer')
const Vendor = require('./Routes/vendor')
const Login = require('./Routes/login')
const Fav = require('./Routes/fav')
const Favs = require('./Routes/favs-buyer')
const Page = require('./Routes/page')
const Filter = require('./Routes/filter')
const Del = require('./Routes/delete-fav')
const Wallet = require('./Routes/wallet')
const Cart = require('./Routes/cart')
const Order = require('./Routes/order')
const Bel = require('./Routes/bel')
const Bela = require('./Routes/bala')
const Po = require('./Routes/po')
const Peo = require('./Routes/peo')
const Co = require('./Routes/co')
const AddFood = require('./Routes/addFood')
const DelVendor = require('./Routes/del-vendor')
const EditFood = require('./Routes/editfood')
const Edits = require('./Routes/edits')
const VOrder = require('./Routes/vorder')
const ModeChange = require('./Routes/modeChange')
const Vcarts = require('./Routes/vcarts')
const One = require('./Routes/1')
const Two = require('./Routes/2')
const Three = require('./Routes/3')
// import bodyParser from 'body-parser'
// import Register from './Routes/register-login'
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

mongoose.connect("mongodb://localhost:27017/Login-Register-DB78",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((connected)=> {
        console.log("DAtaBase Connected");
        app.listen(9002,()=>{
            console.log("started at port 9002")
        })
    })
    .catch((err)=>{
        console.log(err);
    })

// const userSchema = mongoose.Schema(
//     {
//         ManagerName: String,
//         Password: String,
//         ShopName: String,
//         Email: String
//     }
// )

// const User = new mongoose.model("User",userSchema)



// app.post("/register",(req,res)=>{
//    const {ManagerName , Password , ShopName , Email } = req.body
//    const user = new User({
//        ManagerName,
//        Password,
//        ShopName,
//        Email
//    })

//    User.findOne({Email: Email}, (err, user) => {
//     if(user){
//         res.send({message: "User already registerd"})
//     } else {
//         const user = new User({
//             ManagerName,
//             Password,
//             ShopName,
//             Email
//         })
//         user.save(err => {
//             if(err) {
//                 res.send(err)
//             } else {
//                 res.send( { message: "Successfully Registered, Please login now." })
//             }
//         })
//     }
// })

// })
// app.post("/login",(req,res)=>{
//     const { Email , Password  } = req.body
//     console.log(Email , Password)
// })
app.use("/",Del)
app.use("/",Login)
app.use("/",Register)
app.use("/",ProfileBuyer)
app.use("/",ProfileVendor)
app.use("/",Buyer)
app.use("/",Vendor)
app.use("/",Page)
app.use("/",Fav)
app.use("/",Favs)
app.use("/",Cart)
app.use("/",Wallet)
app.use("/",Order)
app.use("/",Bel)
app.use("/",Bela)
app.use("/",AddFood)
app.use("/",EditFood)
app.use("/",Vcarts)
app.use("/",DelVendor)
app.use("/",Edits)
app.use("/",VOrder)
app.use("/",ModeChange)
app.use("/",Po)
app.use("/",Peo)
app.use("/",Co)
app.use("/",One)
app.use("/",Two)
app.use("/",Three)
app.use("/",Filter)





