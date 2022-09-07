import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './home.css';
import Item from './Items';
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


const Buyer = ({ age, setAges }) => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const [SearchItem, setSearchItem] = React.useState({ SearchItems: "", SearchedItems: [], Fav: [],time:{hour:h,min:m}});

    const[filters,setFilters] = React.useState({VN:"",ShopName:"",Min:"0",Max:"100000000",sort:""})
    // const [time, setTime] = React.useState({});
    const eventHandler = (event) => {
        const { name, value } = event.target;
        setSearchItem({
            ...SearchItem,
            [name]: value
        })
    }
    const onFark = (event) => {
        console.log(event.target)
        const {name,value} = event.target
        setFilters({
            ...filters,
            [name]:value
        })

    }
    const history = useHistory();

    const searchButton = () => {
        console.log(SearchItem);
        axios.post("http://localhost:9002/buyer", SearchItem)
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

    const favss = () => {
        axios.post("http://localhost:9002/fad", age)
            .then(
                (res) => {
                    // setSearched(res.data);
                    setSearchItem({
                        ...SearchItem,
                        SearchedItems: SearchItem.SearchedItems,
                        Fav: res.data
                    })
                }
            )
    }

    const filter = () =>{
        const pass = {SearchItem:SearchItem,filters:filters}
        console.log(pass)
        axios.post("http://localhost:9002/filter", pass)
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

    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        searchButton();
        favss();
    }, []);

    const cart = () => {
        history.push('/buyer/cart')
    }
    const wallet = () => {
        history.push('/buyer/wallet')
    }

    return (
        <div>
            {console.log(filters,SearchItem)}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Hello,{age.Name}</a>
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
                            <button class="btn btn-outline-success" type="Profile" style={{marginRight:5}} onClick={cart}> <i className="fa fa-shopping-cart"></i> Order </button>
                            <button class="btn btn-outline-success" type="Profile" style={{marginRight:5}} onClick={wallet}> <i className="fas fa-wallet"></i> {age.Wallet} </button>
                            <button class="btn btn-outline-success" type="Profile" onClick={() => history.push('/profileBuyer')}>Profile</button>
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
                    <div class="col col-lg-3">
                        <h1 className="heading" style={{ textAlign: 'center' }}>Favorite</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>

                                    <th scope="col">Item Name</th>
                                    <th scope="col">Price</th>

                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (SearchItem.Fav).map(
                                        (i) => {
                                            return <Fav prop={i} user={age} SearchItem={SearchItem} setSearchItem={setSearchItem}/>
                                            // return i.Price
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>



                    </div>
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
                    <div class="col col-lg-1" style={{textAlign:'center'}}>
                        <h1>Filter</h1>
                        <input class="form-check-input" type="radio" value={"V"} name="VN" id="flexCheckDefault" onChange={onFark}></input>
                        <p>Vej</p>
                        <input class="form-check-input" type="radio" value={"N"} name="VN" id="flexCheckDefault" onChange={onFark}></input>
                        <p>Non-Vej</p>
                        <input class="form-check-input" type="radio" value={"none"} name="VN" id="flexCheckDefault" onChange={onFark}></input>
                        <p>None</p>

                        <InputLabel id="demo-simple-select-label">Shop Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        name="ShopName"
                        label="Shop Name"
                        value={filters.ShopName}
                        // onChange={handleChange}
                        onChange={onFark}>
                        <MenuItem value={"ALL"}>ALL</MenuItem>
                        <MenuItem value={"JC"}>JC</MenuItem>
                        <MenuItem value={"VC"}>VC</MenuItem>
                        <MenuItem value={"BBC"}>BBC</MenuItem>
                    </Select>
                    <h3>Price Range</h3>
                        <input class="form-input" style={{width:40}} type="text" value={filters.Min} name="Min" id="flexCheckDefault" onChange={onFark}></input>
                        <p>Min</p>
                        <input class="form-input" style={{width:40}} type="text" value="" value={filters.Max} name="Max" id="flexCheckDefault" onChange={onFark}></input>
                        <p>Max</p>
                    <input class="form-check-input" type="radio" name="sort" value="Rating" id="flexCheckDefault" onChange={onFark}></input>
                        <p>Rating</p>
                    <input class="form-check-input" type="radio" name="sort" value="Price" id="flexCheckDefault" onChange={onFark}></input>
                        <p>Price</p>  
                        <input class="form-check-input" type="radio" name="sort" value="none" id="flexCheckDefault" onChange={onFark}></input>
                        <p>None</p>  
                    <button className="btn btn-outline-primary" onClick={filter}>Filter</button>



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

export default Buyer;


