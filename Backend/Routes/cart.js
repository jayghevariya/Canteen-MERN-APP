// import express from 'express'
const express = require("express");
const { count } = require("./../Schemas/order");
const router = express.Router();
// const Register = require("./../Schemas/register");
const Order = require("./../Schemas/order");
const Items = require("./../Schemas/item");


router.post("/cart" , (req,res)=>{
    let { prop , totalcost , age,SearchItem } = req.body
    const {FoodItemName,Price,Rating,VN,ShopName,Count} = prop
    const ManId = age._id
    const FoodId = prop.FoodId || prop._id
    const TotalPrice = totalcost
    const TimeHour=SearchItem.time.hour
    const TimeMin=SearchItem.time.min
    // console.log(ManId , FoodId , totalCost);
    let c = parseInt(Count)
    let newProp=prop;
    newProp.Count = `${parseInt(Count) + 1}`
    console.log(newProp)
    Items.updateOne({_id:FoodId},newProp,(res)=>{
        if(res) console.log("done")
    })

    const user = new Order({
        ManId,
        FoodId,
        FoodItemName,
        TimeHour,
        TimeMin,
        Price,
        TotalPrice,
        Rating,
        ShopName,
        VN,
        Status: "PLACED",
        Next: "ACCEPTED"
    })
    user.save(err => {
        if(err) {
            res.send(err)
        } else {
            // res.send( { message: "Successfully Registered, Please login now." } )
        }
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



