
const express = require("express");
const router = express.Router();
const Order = require("./../Schemas/order");
router.post("/modeChange" , (req,res)=>{
  
    const {_id} = req.body
    console.log(_id)
    console.log(req.body)
    // {console.log("_id")}
    // Order.find({ManId: _id}, function(err, result) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.json(result);
          
    //     }
    // });
    Order.updateOne({_id:_id,}, 
        req.body, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated Docs : ", docs);
        }
    });
    




})

module.exports = router;