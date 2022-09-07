const express = require("express");
const router = express.Router();
const Items = require("./../Schemas/item");
const Fav = require("./../Schemas/fav");

router.post("/buyer" , (req,res)=>{
    const { SearchItems  } = req.body
    // console.log(SearchItems)
    // console.log("SearchItems")
    // const item = new Items({
    //     FoodItemName:"Maggi",
    //     Price:"100",
    //     Rating:"0",
    //     ShopName:"BBC",
    //     VN:"N"
    // })
    // item.save(err => { 
    //     if(err) {
    //         res.send(err)
    //     } else {
    //         res.send( { message: "done" } )
    //         console.log("done")
    //     }

    // })
    if(SearchItems===""){
      // console.log("true")
        Items.find({}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
          });
    }else
    {

    
    Items.find({FoodItemName: SearchItems}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    }




})

module.exports = router;
