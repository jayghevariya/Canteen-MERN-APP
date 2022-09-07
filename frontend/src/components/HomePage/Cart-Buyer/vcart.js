import { Shop } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import{ init } from '@emailjs/browser';
const Doss = ({i , sets ,setSets,age,setAges}) => {
const history = useHistory();
init("user_Kw2VW2j3XTalSunZOYHLj");
const [state,SetState] = React.useState(`${i.Next}`);
  const deletess = () => {
    const id = i._id;
    const ShopName = i.ShopName
    console.log(id)

    axios.post("http://localhost:9002/bela",{id:id,ShopName:ShopName})
        .then( (res) => {

            setSets(
                
                res.data
            )

            // const returnM = parseInt(i.TotalPrice)
            // let ab;
            
            // const wall = parseInt(age.Wallet) + returnM
            // setAges({
            //   ...age,
            //   Wallet:wall
            // })
        } )
    
    axios.post("http://localhost:9002/wallet",age)
            .then(res => alert(res.data.message))
}

const stage=()=>{
    let fukk = i
    fukk.Status = fukk.Next
    if (fukk.Next==="ACCEPTED") {
        fukk.Next="COOKING"
        SetState(fukk.Next)
    }else if(fukk.Next==="COOKING"){
        fukk.Next="READY FOR PICKUP"
        SetState(fukk.Next)
    }else if(fukk.Next="READY FOR PICKUP")
    {
        fukk.Next="COMPLETED"
    }
    console.log(fukk)
    axios.post("http://localhost:9002/modeChange",fukk)
        .then(res => alert(res.data.message));
    emailjs.send("service_snd9g1c","template_fdzontj",{
            from_name: "Jay Ghevariya",
            to_name: "b",
            message: "c",
            reply_to: "d",
            });
    
}

  return(

    <tr>

            <td scope="col">{i.FoodItemName}</td>
            <td scope="col">{i.TimeHour}:{i.TimeMin}</td>
            <td scope="col">{i.Price}</td>
            <td scope="col">{parseInt(i.TotalPrice) / parseInt(i.Price) }</td>
            <td scope="col">{i.TotalPrice}</td>
            <td scope="col"><button type="button" class="btn btn-outline-primary" onClick={stage}>{state}</button></td>
            <td><button type="button" class="btn btn-outline-danger"onClick={deletess} ><i className="fa fa-close"></i> </button></td>
        </tr>
  )

} 

const Cart = ({ age ,setAges }) => {

  
  const history = useHistory();
  const [sets, setSets] = React.useState( [] );
  const loaddata = () => {
    axios.post("http://localhost:9002/vorder", age)
      .then(
        (res) => {
          setSets(res.data )
        }

      )
  }

  useEffect(() => {
 
    loaddata();
  }, []);

  const ha = () => {
        // axios.post("http://localhost:9002/wallet",age)
        // .then(res => alert(res.data.message))

            history.push('/vendor');
  }


  return (
    <div>
      <div>
        <button className="btn btn-outline-primary" onClick={ha}>Back</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>

            <th scope="col">Item Name</th>
            <th scope="col">Time</th>
            <th scope="col">Price</th>
            <th scope="col">Unit</th>
            <th scope="col">TotalPrice</th>
            <th scope="col">Status</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {
            (sets).map(
              (i) => {
                return  < Doss i={i} sets={ sets} setSets={setSets} age={age} setAges={setAges} />
                                            
                                            // return i.Price
                                        }
        )
                                }
                                
                            </tbody>
                        </table>
      </div >   
    )
}

export default Cart;