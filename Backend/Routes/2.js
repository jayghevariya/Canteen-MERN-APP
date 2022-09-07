const Item = require("./../Schemas/co");
const express = require("express");
const router = express.Router();

router.post("/2" , (req,res)=>{
  
    const {ShopName} = req.body
    // {console.log(req.body)}
    Item.find({ShopName: ShopName}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    




})

module.exports = router;