import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Buyer = () => {
    const [age, setAge] = React.useState({
        VB: "Buyer",
        Name: "",
        Email: "",
        Age: "",
        MobileNo: "",
        Year: "",
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
        age.Name &&
        age.Email &&
        age.Age &&
        age.MobileNo &&
        age.Year  &&
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
            {console.log(age)}
            <Stack spacing={1} direction="column">
                <div className="Field">
                    <Stack spacing={1} direction="column">
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Name">
                                    <TextField id="outlined-basic" label="Name " variant="outlined" name="Name" onChange={handleChange}/>
                                </div>
                                <div className="Email">
                                    <TextField id="outlined-basic" label="Email-id" variant="outlined" name="Email" onChange={handleChange}/>
                                </div>
                            </Stack>
                        </div>
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Contact No">
                                    <TextField id="outlined-basic" label="Contact No" variant="outlined" name="MobileNo" onChange={handleChange}/>
                                </div>
                                <div className="Age">
                                    <TextField id="outlined-basic" label="Age" variant="outlined" name="Age" onChange={handleChange}/>
                                </div>
                            </Stack>
                        </div>
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Password">
                                    <TextField type="password" id="outlined-basic" label="Password" variant="outlined" name="Password" onChange={handleChange}/>
                                </div>
                                <div className="Re-enter Password">
                                    <TextField type="password" id="outlined-basic" label="Re-enter Password" variant="outlined" name="RePassword" onChange={handleChange}/>
                                </div>

                            </Stack>
                        </div>
                        <div>
                            <Stack spacing={1} direction="row">
                                <div className="Year">
                                    <TextField id="outlined-basic" label="Year" variant="outlined" name="Year" onChange={handleChange}/>
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
                    <div>
                        <Button variant="contained" onClick={()=>{history.push("/login")}}>Login</Button>
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default Buyer;