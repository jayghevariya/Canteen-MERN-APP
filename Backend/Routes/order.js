
const express = require("express");
const router = express.Router();
const Order = require("./../Schemas/order");
router.post("/order" , (req,res)=>{
  
    const {_id} = req.body
    console.log("_id")
    // {console.log("_id")}
    Order.find({ManId: _id}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
          
        }
    });
    




})

module.exports = router;