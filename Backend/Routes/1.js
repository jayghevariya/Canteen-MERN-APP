const Item = require("./../Schemas/po");
const express = require("express");
const router = express.Router();

router.post("/1" , (req,res)=>{
  
    const {ShopName} = req.body
    {console.log(ShopName,req.body)}
    Item.find({ShopName: ShopName}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
    });
    




})

module.exports = router;