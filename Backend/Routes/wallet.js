const express = require("express");
const router = express.Router();
const Register = require("./../Schemas/register");

router.post("/wallet" , (req,res)=>{

    
    const {Email,Wallet} =req.body
    console.log(Wallet)

    Register.updateOne({Email:Email}, 
        req.body, function (err, docs) {
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
