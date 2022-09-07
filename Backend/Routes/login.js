const express = require("express");
const router = express.Router();

router.post("/login" , (req,res)=>{
    const { Email , Password  } = req.body

    Register.findOne({Email: Email}, (err, user) => {
        if(user)
        {
            res.send({user : user});
        }else
        {
            res.send({message: "User Not Registred, Please Register."})
        }

    })
   
})


// router.post("/home" , (req,res)=>{
//     const { Email , Password  } = req.body
//     // console.log(Email , Password)
    
    


   
// })

module.exports = router;