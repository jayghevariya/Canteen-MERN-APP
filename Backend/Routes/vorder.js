
const express = require("express");
const router = express.Router();
const Order = require("./../Schemas/order");
router.post("/vorder" , (req,res)=>{
  
    const {ShopName} = req.body
    console.log("_id")
    // {console.log("_id")}
    Order.find({ShopName: ShopName}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
          
        }
    });
    




})

module.exports = router;