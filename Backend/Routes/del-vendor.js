// import express from 'express'
const express = require("express");
const router = express.Router();
// const Register = require("./../Schemas/register");
const Item = require("./../Schemas/item");


router.post("/ddel" , (req,res)=>{
    let { _id,ShopName  } = req.body
    // let { ShopName  } = req.body.age

    // console.log(FoodId , ManId);


   Item.findByIdAndDelete(_id)
        .then(()=>{
            Item.find({ShopName:ShopName}, function(err, result) {
                if (err) {
                  console.log(err);
                } else {
                  res.json(result);
                }
              });
            // console.log("ddd")
        })

        



})

module.exports = router;



