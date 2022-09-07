
const express = require("express");
const router = express.Router();

const Order = require("./../Schemas/co");
const Peo = require("./../Schemas/peo");


router.post("/co" , (req,res)=>{
    // let { prop , totalcost , age , SearchItem } = req.body
    // const {FoodItemName,Price,Rating,VN,ShopName} = prop
    // const ManId = age._id
    // const FoodId = prop.FoodId || prop._id
    // const TotalPrice = totalcost
    // const TimeHour=SearchItem.time.hour
    // const TimeMin=SearchItem.time.min
    // console.log(ManId , FoodId , totalCost);
    console.log(req.body)
    const {TimeHour,TimeMin} = req.body
    Peo.deleteOne({TimeHour:TimeHour,TimeMin:TimeMin})
    const user = new Order(req.body)
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



