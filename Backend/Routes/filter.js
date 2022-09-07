const express = require("express");
const router = express.Router();
const Items = require("./../Schemas/item");
const Fav = require("./../Schemas/fav");

router.post("/filter" , (req,res)=>{
    const { SearchItem , filters  } = req.body
    console.log(SearchItem,filters)
    let list={}
    if(filters.VN!=="" && filters.VN!=="none") list["VN"] = filters.VN
    list["$gte"] = `{Price: ${parseInt(filters.Min)} }`
    list["$lte"] = `{Price: ${parseInt(filters.Max)} }`


    if(filters.ShopName!=="" && filters.ShopName!=="ALL") list["ShopName"] = filters.ShopName
    let an
    if(filters.sort!=="" && filters.sort!=="none") an = filters.sort
    console.log(list,an)
  
        let ress={an:1};

        Items.find(list).sort(an).exec(function(err, result) {
            if (err) {
              console.log(err);
            } else {
              res.json(result);
            // console.log(result);
            }
        });
        
      
    
    // Items.find({FoodItemName: SearchItems}, function(err, result) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.json(result);
    //     }
    //   });
    // }




})

module.exports = router;
