// import express from 'express'
const express = require("express");
const router = express.Router();
// const Register = require("./../Schemas/register");
const Fav = require("./../Schemas/fav");


router.post("/fav" , (req,res)=>{
    let { _id,FoodItemName,Price,Rating,ShopName,VN } = req.body.prop
    let id = _id
    _id  = req.body.user._id
    // console.log(_id,id);


   Fav.findOne({FoodId: id ,ManId:_id}, (err, user) => {
    if(user){
        res.send({message: "Item Already Added"})
    } else {
        const user = new Fav({
            ManId:_id,
            FoodId:id,
            FoodItemName:FoodItemName,
            Price:Price,
            Rating:Rating,
            ShopName:ShopName,
            VN:VN
        })
        user.save(err => {
            if(err) {
                res.send(err)
            } else {
                res.send( { message: "Successfully Added" } )

            }
        })
    }
})



})

module.exports = router;



