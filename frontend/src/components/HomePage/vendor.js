import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './home.css';
import Item from './item';
import Fav from './fav';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';


// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }


const Vendor = ({ age, setAges }) => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const [SearchItem, setSearchItem] = React.useState({ SearchItems: "", SearchedItems: [],time:{hour:h,min:m} });
   
    // const [time, setTime] = React.useState({});
    const eventHandler = (event) => {
        const { name, value } = event.target;
        setSearchItem({
            ...SearchItem,
            [name]: value
        })
    }

    const cart = () => {
        history.push("/vendor/vcart")
    }

    const history = useHistory();

    const searchButton = () => {
        const pass = {age:age , SearchItem:SearchItem}
        axios.post("http://localhost:9002/vendor", pass)
            .then(
                (res) => {
                    // setSearched(res.data);
                    setSearchItem({
                        ...SearchItem,
                        SearchedItems: res.data
                    })
                }
            )
    }

    const addFood = () => {
        history.push("/addFood");
    }

    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        searchButton();
        
    }, []);

    const statuss = () => {
        history.push('vendor/status');
    }

    

    return (
        <div>
            {console.log(SearchItem)}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Hello,{age.ManagerName}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled">{SearchItem.time.hour}</a>
                                <a class="nav-link disabled">:</a>
                                <a class="nav-link disabled">{SearchItem.time.min}</a>
                            </li> */}
                           
                                <p>{SearchItem.time.hour}</p>
                                <p>:</p>
                                <p>{SearchItem.time.min}</p>
                            
                        </ul>
                        <form class="d-flex">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            {/* <a class="form-control me-2 nav-link" >Profile</a> */}
                            <button class="btn btn-outline-success" type="Profile" style={{marginRight:5}} onClick={statuss}>  Status </button>
                            <button class="btn btn-outline-success" type="Profile" style={{marginRight:5}} onClick={cart}>  Orders </button>
                            <button class="btn btn-outline-success" type="Profile" style={{marginRight:5}} onClick={addFood}> Add Food </button>
                            <button class="btn btn-outline-success" type="Profile" onClick={() => history.push('/profileVendor')}>Profile</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <h1>
                {age.Name} <br />
                {age.Email} <br />
                {age.Year} <br />
                {age.MobileNo} <br />
                {age.Age} <br />
                {age.Password} <br />
            </h1> */}
            {/* <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.." />
            </div> */}
            <div class="container">
                <div class="row">
                    
                        
                    <div class="col">
                        <h1 className="heading" style={{ textAlign: 'center' }}>Dashbord</h1>
                        <div className="SearchBars">
                            <TextField id="outlined-basic" label="Search" variant="outlined" className="SearchBar" name="SearchItems" onChange={eventHandler} value={SearchItem.SearchItems} />
                            <button class="btn btn-outline-success search" type="Profile" onClick={searchButton}><i className="fa fa-search"></i></button>
                        </div>
                        {
                            (SearchItem.SearchedItems).map(
                                (i) => {
                                    return <Item prop={i} SearchItem = {SearchItem} setSearchItem={setSearchItem} age={age} setAges={setAges}/>
                                    // return i.Price
                                }
                            )
                        }
                    </div>
                   
                </div>
            </div>

            {/* <table class="table table-condensed" style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>FoodItemName</th>
                        <th>Price</th>
                        <th>ShopName</th>
                        <th>Vej/Non-Vej</th>
                        <th>Rating</th>
                        <th>Add To Favorite</th>
                        <th>Order</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (SearchItem.SearchedItems).map(
                        (i) => {
                            return <Item prop={i} />
                        }
                    )
                }
                </tbody>
            </table> */}
        </div>
    )
}

export default Vendor;


