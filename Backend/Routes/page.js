const express = require("express");
const router = express.Router();
const Items = require("./../Schemas/item");
const Fav = require("./../Schemas/fav");

router.post("/page" , (req,res)=>{


    const {id} = req.body    
   
    // console.log(id)
    
    Items.findById(`${id}`, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log(result)
        }
    });
    




})

module.exports = router;
