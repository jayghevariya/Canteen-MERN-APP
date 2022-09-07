// import express from 'express'
const express = require("express");
const router = express.Router();
// const Register = require("./../Schemas/register");
const Fav = require("./../Schemas/fav");


router.post("/del" , (req,res)=>{
    let { FoodId , ManId } = req.body

    console.log(FoodId , ManId);


   Fav.deleteOne({FoodId: FoodId ,ManId:ManId})
        .then(()=>{
            Fav.find({}, function(err, result) {
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



