// import express from 'express'
const express = require("express");
const router = express.Router();
// const Register = require("./../Schemas/register");
const Order = require("./../Schemas/order");


router.post("/bel" , (req,res)=>{
    let {id} = req.body

    console.log(id);
    Order.findByIdAndDelete(id)
    .then(()=>{
                    Order.find({}, function(err, result) {
                        if (err) {
                          console.log(err);
                        } else {
                          res.json(result);
                        }
                      });
                    // console.log("ddd")
                })

//    Fav.deleteOne({FoodId: FoodId ,ManId:ManId})
//         .then(()=>{
//             Fav.find({}, function(err, result) {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   res.json(result);
//                 }
//               });
//             // console.log("ddd")
//         })

        



})

module.exports = router;



