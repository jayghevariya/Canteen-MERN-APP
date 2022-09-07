const express = require("express");
const router = express.Router();
const Items = require("./../Schemas/item");
const Fav = require("./../Schemas/fav");

router.post("/vendor" , (req,res)=>{
    const { SearchItem ,age  } = req.body
    console.log(SearchItem)
    const {ShopName } = age
    const { SearchItems } = SearchItem
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
        Items.find({ShopName:ShopName}, function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            }
          });
    }else
    {

    
    Items.find({FoodItemName: SearchItems,ShopName:ShopName}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    }




})

module.exports = router;
