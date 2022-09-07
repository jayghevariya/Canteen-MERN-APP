import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Doss = ({i , sets ,setSets,age,setAges}) => {
  const history = useHistory();
  const [state,SetState] = React.useState(`${i.Status}`);
  const deletess = () => {
    const id = i._id;
    console.log(id)
    // let abc = {FoodId:id,ManId:id2}
    axios.post("http://localhost:9002/bel",{id:id})
        .then( (res) => {
            // console.log(res.data)
            setSets({
                
                order: res.data
            })
            const returnM = parseInt(i.TotalPrice)
            const wall = parseInt(age.Wallet) + returnM
            setAges({
              ...age,
              Wallet:wall
            })
        } )
      axios.post("http://localhost:9002/wallet",age)
        .then(res => alert(res.data.message))
}

const stage=()=>{
  let fukk = i
  
  
  if(fukk.Next="COMPLETED")
  {
    fukk.Status=fukk.Next
    SetState(fukk.Status)
 
    
   
  }
  console.log(fukk)
  axios.post("http://localhost:9002/co",fukk)
      .then(res => alert(res.data.message))
  axios.post("http://localhost:9002/modeChange",fukk)
      .then(res => alert(res.data.message))
  

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

  // const deletess = () => {
  //     const id = prop.FoodId;
  //     const id2 = user._id;
  //     console.log(prop)
  //     let abc = {FoodId:id,ManId:id2}
  //     axios.post("http://localhost:9002/del",abc)
  //         .then( (res) => {
  //             // console.log(res.data)
  //             setSearchItem({
  //                 ...SearchItem,
  //                 Fav: res.data
  //             })
  //         } )
  // }
  const history = useHistory();
  const [sets, setSets] = React.useState({ order: [] });
  const loaddata = () => {
    axios.post("http://localhost:9002/order", age)
      .then(
        (res) => {
          setSets({ order: res.data })
        }

      )
  }

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    loaddata();
  }, []);

  const ha = () => {
    axios.post("http://localhost:9002/wallet",age)
            .then(res => alert(res.data.message))

            history.push('/buyer');
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
            (sets.order).map(
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