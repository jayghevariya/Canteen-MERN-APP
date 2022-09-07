import * as React from 'react';
import './home.css';
import axios from 'axios'

import { useHistory } from "react-router-dom";
const Profile = ({ age , setAges }) => {
    const [news, setNews] = React.useState({
        VB: "Buyer",
        Name: `${age.Name}`,
        Email: `${age.Email}`,
        Age: `${age.Age}`,
        MobileNo: `${age.MobileNo}`,
        Year: `${age.Year}`,
        Password: `${age.Password}`,
        RePassword: `${age.Password}`
    });

    const backend = () =>{
        
    }
    const save = () =>{
        if(news.VB &&
            news.Name &&
            news.Email &&
            news.Age &&
            news.MobileNo &&
            news.Year  &&
            (news.Password === news.RePassword))
            {
                setAges({
                    ...age,
                    ...news
                })
                
                // console.log("123");
                const pass = age
                console.log("pro",age,news)
                
                do {
                    axios.post("http://localhost:9002/profile",pass)
                .then(
            
                )
                  }
                  while (age===news);

                
                    
                
                
                
                
            }else
            {
                alert("Invalid Credential")
            }

    }
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNews({
            ...news,
            [name]: value
        });

    };


    const history = useHistory();
    return (
        <div>
             {/* {console.log(news)} */}
            {/* <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
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
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            {/* <a class="form-control me-2 nav-link" >Profile</a> */}
                            <button class="btn btn-outline-success" type="Profile" onClick={ () => {history.push('/buyer'); save()}}>Back</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="setWidth">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <label for="exampleFormControlInput1" class="form-label">{news.Email}</label>
                    <label for="exampleFormControlInput2" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={news.Name} name="Name" onChange={handleChange} />
                    <label for="exampleFormControlInput3" class="form-label">Age</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={news.Age} name="Age" onChange={handleChange} />
                    <label for="exampleFormControlInput4" class="form-label">MobileNo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={news.MobileNo} name="MobileNo" onChange={handleChange}/>
                    <label for="exampleFormControlInput5" class="form-label">Year</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" value={news.Year} name="Year" onChange={handleChange}/>
                    <label for="exampleFormControlInput6" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" value={news.Password} name="Password" onChange={handleChange}/>
                    <label for="exampleFormControlInput6" class="form-label">Re-enter Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" value={news.RePassword} name="RePassword" onChange={handleChange}/>
                    <button class="btn btn-outline-success" type="Profile" onClick={save}>Save</button>
                </div>
            </div>

        </div>
    )
}

export default Profile;