const Fav = require("./../Schemas/fav");
const express = require("express");
const router = express.Router();

router.post("/fad" , (req,res)=>{
  
    const {_id} = req.body
    // {console.log("_id")}
    Fav.find({ManId: _id}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    




})

module.exports = router;
