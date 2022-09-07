// import express from 'express'
const express = require("express");
const router = express.Router();
const Register = require("./../Schemas/register");


router.post("/register" , (req,res)=>{
    const {ManagerName , Password , ShopName , Email , Name , Age , Year , OpenTime, CloseTime , VB , MobileNo  } = req.body
    
    // console.log(user);


   Register.findOne({Email: Email,ShopName:ShopName}, (err, user) => {
    if(user){
        res.send({message: "User already registerd"})
    } else {
        const user = new Register({
            ManagerName,
            Password,
            ShopName,
            Email, 
            Name , 
            Age , 
            Year , 
            OpenTime, 
            CloseTime , 
            VB , 
            MobileNo,
            Wallet: "0"
        })
        user.save(err => {
            if(err) {
                res.send(err)
            } else {
                res.send( { message: "Successfully Registered, Please login now." } )
            }
        })
    }
})



})

module.exports = router;



