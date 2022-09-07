import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import './login.css';
import axios from 'axios';
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
const Login = ({ age, setAges }) => {

  const [ad, setAd] = React.useState({
    CO: [],
    PO: [],
    PEO: [],
  });
  const history = useHistory();

  const loaddata = () => {
    let po,co,peo;
    
    
    
    console.log(ad);

  }
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    loaddata();
  }, []);


//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setAge({
//       ...age,
//       [name]: value
//     });

//   };

const see = () =>{
    axios.post("http://localhost:9002/1", age)
    .then((res)=>{
        setAd({
            ...ad,
            PO:res.data
        })
    })
}
const sees = () =>{
    axios.post("http://localhost:9002/2", age)
    .then((res)=>{
        setAd({
            ...ad,
            CO:res.data
        })
    })
}
const seess = () =>{
    axios.post("http://localhost:9002/3", age)
    .then((res)=>{
        setAd({
            ...ad,
            PEO:res.data
        })
    })
}

  
  const back=()=>{
      history.push('/vendor');
  }

  return (

    <div className="main ">
      {console.log(ad)}
      <div className="main-box shadow p-3 mb-5 bg-body rounded">
        <h1>Total Order:{ad.PO.length}</h1>
        <button onClick={see}>SEE</button>
        <h1>Completed Order:{ad.CO.length}</h1>
        <button onClick={sees}>SEE</button>
        <h1>Pending Order:{ad.PEO.length}</h1>
        <button onClick={seess}>SEE</button>
        
      </div>
      <button onClick={back}>BACK</button>
    </div>
  )

}

export default Login;


// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function BasicButtons() {
//   return (
//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </Stack>
//   );
// }


