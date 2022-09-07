import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import './register.css';

import axios from 'axios';
import { useHistory } from "react-router-dom";

const Vendor = () => {
    const [age, setAge] = React.useState({
        VB: "Vendor",
        ManagerName: "",
        Email: "",
        ShopName: "",
        MobileNo: "",
        OpenTime: "",
        CloseTime: "",
        Password: "",
        RePassword: ""
    });
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAge({
            ...age,
            [name]: value
        });

    };

    const registers = () => {
        if(age.VB &&
        age.ManagerName &&
        age.Email &&
        age.ShopName &&
        age.MobileNo &&
        age.OpenTime &&
        age.CloseTime &&
        (age.Password === age.RePassword))
        {
            axios.post("http://localhost:9002/register",age)
            .then(res => alert(res.data.message))
        }else
        {
            alert("Invalid Credential")
        }
        
    }

    return (
        <div>
            {console.log("age", age)}
            <Stack spacing={1} direction="column">
                <div className="Field">
                    <Stack spacing={1} direction="column">
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Manager Name">
                                    <TextField id="outlined-basic" label="Manager Name" variant="outlined" onChange={handleChange} name="ManagerName" />
                                </div>
                                <div className="Email">
                                    <TextField id="outlined-basic" label="Email-id" variant="outlined" onChange={handleChange} name="Email" />
                                </div>
                            </Stack>
                        </div>
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Contact No">
                                    <TextField id="outlined-basic" value={age.MobileNo} label="Contact No" variant="outlined" onChange={handleChange} name="MobileNo" />
                                </div>
                                <div className="wid">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Shop-Name</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age.ShopName}
                                            label="Age"
                                            onChange={handleChange}
                                            name="ShopName"
                                        >
                                            <MenuItem value={'JC'}>JC</MenuItem>
                                            <MenuItem value={'VC'}>VC</MenuItem>
                                            <MenuItem value={'BBC'}>BBC</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Stack>
                        </div>

                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Opentime">
                                    <TextField id="outlined-basic" label="Open Time" variant="outlined" onChange={handleChange} name="OpenTime" />
                                </div>
                                <div className="Close time">
                                    <TextField id="outlined-basic" label="Close Time" variant="outlined" onChange={handleChange} name="CloseTime" />
                                </div>
                            </Stack>
                        </div>
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Password">
                                    <TextField type="password" id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} name="Password" />
                                </div>
                                <div className="Re-enter Password">
                                    <TextField type="password" id="outlined-basic" label="Re-enter Password" variant="outlined" onChange={handleChange} name="RePassword" />
                                </div>
                            </Stack>
                        </div>
                    </Stack>
                </div>
                <div className="Footer">
                    <div>
                        <Button variant="contained" onClick={registers}>Register</Button>
                    </div>
                    <div>
                        or
                    </div>
                    <div onClick={()=>{history.push("/login")}}>
                        <Button variant="contained">Login</Button>
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default Vendor;