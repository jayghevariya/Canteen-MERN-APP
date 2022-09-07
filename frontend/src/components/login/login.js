import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './login.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
const Login = ({ setAges }) => {

  const [age, setAge] = React.useState({
    Email: "",
    Password: "",
  });
  const history = useHistory();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAge({
      ...age,
      [name]: value
    });

  };

  const login = () => {
    if (age.Email &&
      age.Password) {
      axios.post("http://localhost:9002/login", age)
        .then(res => {

          if (res.data.message !== undefined) alert(res.data.message);
          else {
            const idPass = res.data.user.Password
            if (age.Password === idPass) {
              // axios.post("http://localhost:9002/home",age)
              // console.log(res.data.user)

              setAges(res.data.user)
              
              history.push("/");
              
              
            }
            else {
              alert("Incorrect Password");
            }
          }
        })
    } else {
      alert("Invalid Credential")
    }
  }

  return (

    <div className="main ">
      {/* {console.log(age)} */}
      <div className="main-box shadow p-3 mb-5 bg-body rounded">
        <Stack spacing={1} direction="column">
          <div className="Heading">
            <h1><i className="fa fa-user"> Login </i></h1>
          </div>
          <div className="Field">
            <Stack spacing={1} direction="column">
              <div className="Email">
                <TextField id="outlined-basic" label="Email-id" variant="outlined" name="Email" onChange={handleChange} />
              </div>
              <div className="Password">
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" name="Password" onChange={handleChange} />
              </div>
            </Stack>
          </div>
          <div className="Footer">
            <div>
              <Button variant="contained" onClick={login}>Login</Button>
            </div>
            <div>
              or
            </div>
            <div>
              <Button variant="contained" onClick={() => history.push("/register")}>Register</Button>
            </div>
          </div>
        </Stack>
      </div>
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


