const express = require("express");
const router = express.Router();
const Order = require("./../Schemas/order");
const Register = require("./../Schemas/register");
router.post("/vcarts" , (req,res)=>{
  
    const {id} = req.body
    console.log("_id")
    // {console.log("_id")}
    Register.find({_id: id}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
          
        }
    });
    




})

module.exports = router;