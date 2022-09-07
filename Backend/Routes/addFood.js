// import express from 'express'
const express = require("express");
const router = express.Router();
const Item = require("./../Schemas/item");


router.post("/addFood" , (req,res)=>{
    const {FoodItemName , Price , VN    } = req.body.news
    const {ShopName   } = req.body.age
    
    console.log(FoodItemName,ShopName,Price,VN);


   Item.findOne({FoodItemName:FoodItemName,ShopName:ShopName}, (err, user) => {
    if(user){
        res.send({message: "Food already registerd"})
    } else {
        const user = new Item({
            FoodItemName,
            ShopName,
            Price,
            VN,
            Rating: "0",
            Count:"0"
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



