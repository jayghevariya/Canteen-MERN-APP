const Item = require("./../Schemas/item");
const express = require("express");
const router = express.Router();

router.post("/editItem" , (req,res)=>{
  
    const {id} = req.body
    // {console.log(req.body)}
    Item.find({_id: id}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    




})

module.exports = router;