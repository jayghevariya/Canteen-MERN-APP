import axios from 'axios';
import * as React from 'react';
import './home.css'
import { useHistory } from "react-router-dom";

const Item = ({ prop,SearchItem,setSearchItem,age,setAges } ) => {
    const history = useHistory();
    // const [values, setValues] = React.useState("0");
    const edit = () => {
        history.push(`/vendor/${prop._id}`)

    }
    const delet = () => {
        console.log(prop)

        axios.post("http://localhost:9002/ddel",prop)
            .then( (res) => {
                // console.log(res.data)
                setSearchItem({
                    ...SearchItem,
                    SearchedItems: res.data
                })
            } )
    }
    // const add = () => {
        
    //     let send ={
    //         user: age,
    //         prop: prop
    //     }
    //     axios.post("http://localhost:9002/fav",send)
    //     .then((res)=>{
    //         console.log(res.data)
    //         if(res.data.message==="Successfully Added")
    //         {
    //             let list = SearchItem.Fav
    //             list.push(prop)
    //             setSearchItem({
    //                 ...SearchItem,
    //                 Fav:list
    //             })
    //         }
    //     })
    // }
    
    // const handleChange = (event) => {
    //     const { value } = event.target;
    //     setValues(value);

    // };
    // const plus = () => {
    //     setValues(parseInt(values)+1)
    // }
    // const shopp = () => {
    //     const totalcost = parseInt(values) * prop.Price
    //     console.log(totalcost)
    //     if(totalcost <= parseInt(age.Wallet))
    //     {
    //         const money= age.Wallet - totalcost
    //         setAges({
    //             ...age,
    //             Wallet: `${money}`
    //         })
    //         const pass={prop:prop , totalcost:totalcost , age:age ,SearchItem:SearchItem }
    //         axios.post("http://localhost:9002/wallet",age)
    //             .then(res => alert(res.data.message))
    //         axios.post("http://localhost:9002/cart",pass)
    //             .then(res => alert(res.data.message))

    //     }
    //     else  {
    //         axios.post("http://localhost:9002/wallet",age)
    //         .then(res => alert(res.data.message))
    //         alert("Add money")
    //     }
    // }
    

    // const change = () => {
    //     history.push(`buyer/${prop._id}`)
    // }
    return(
        
    
            




    //   <tr>
    //     <td></td>
    //     <td>{prop.FoodItemName}</td>
    //     <td>{prop.Price}</td>
    //     <td>{prop.ShopName}</td>
    //     <td>{prop.VN}</td>
    //     <td>{prop.Rating}</td>
    //     <td><button type="button" class="btn btn-outline-warning"><i className="fa fa-heart"></i> </button></td>
    //     <td><button type="button" class="btn btn-outline-success">Order Now</button></td>
    //   </tr>
      <div class="card widdd" style={{textAlign:'center' , marginLeft:15 , marginTop:15}}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{prop.FoodItemName}</h5>
        <p class="card-text"><i className="fa fa-rupee"></i>{prop.Price}</p>
        <button href="#" class="btn btn-primary" onClick={edit}>Edit</button>
        <button class="btn btn-outline-danger" onClick={delet} style={{marginLeft:10}}>Delete</button>
        {/* <button class="btn btn-outline-success" type="Profile" style={{marginLeft:10}} onClick={shopp}> <i className="fa fa-shopping-cart"></i></button>
        <div style={{marginTop:10}}>
        <button class="btn btn-outline" type="Profile" > <i className="fa fa-plus" onClick={plus}></i></button>
        <input style={{width:50, height:35}} value={values} onChange={handleChange}></input>
        <button class="btn btn-outline" type="Profile" > <i className="fa fa-minus" onClick={minus}></i></button>
        </div> */}
      </div>
    </div>

      
      
    





            
    )
}

export default Item;