const express = require("express");
const router = express.Router();
const Item = require("./../Schemas/item");

router.post("/editFoodIt" , (req,res)=>{
   const {_id} = req.body.Food
   let Food = req.body.Food
   const NonFOOD = req.body.news
   const {FoodItemName,Price,VN} = req.body.news
    Food = {
        ...Food,
        ...NonFOOD
    }
    
    console.log(req.body);
    console.log(Food);
    // let find;
    // Item.findById(id)
    // .then((res)=>find=res)
    // console.log(find);

    Item.updateOne({_id:_id}, 
        Food, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated Docs : ", docs);
        }
    });
    


//    Register.findOne({Email: Email}, (err, user) => {
//     if(user){
        
//     } else {
//         const user = new Register({
//             ManagerName,
//             Password,
//             ShopName,
//             Email, 
//             Name , 
//             Age , 
//             Year , 
//             OpenTime, 
//             CloseTime , 
//             VB , 
//             MobileNo
//         })
//         user.save(err => {
//             if(err) {
//                 res.send(err)
//             } else {
//                 res.send( { message: "Successfully Saved." } )
//             }
//         })
//     }
// })



})

module.exports = router;
