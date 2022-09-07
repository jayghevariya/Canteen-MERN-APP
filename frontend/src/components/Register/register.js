import * as React from 'react';

import Stack from '@mui/material/Stack';

import './register.css';
import Buyer from './buy'
import Vendor from './ven'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Register = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

   


    if (age === 'Vendor') {
        return (
            <div className="main">
            <div className="main-box shadow p-3 mb-5 bg-body rounded">
                <Stack spacing={1} direction="column">
                    <div className="Heading">
                        <h1><i className="fa fa-user"> Register </i></h1>
                    </div>
                    <div className="lable">
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={'Vendor'}>Vendor</MenuItem>
                            <MenuItem value={'Buyer'}>Buyer</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                    <Vendor />
                </Stack>
            </div>
        </div>
           
        );
    }
    if (age === 'Buyer') {
        return (
            <div className="main ">
            <div className="main-box shadow p-3 mb-5 bg-body rounded">
                <Stack spacing={1} direction="column">
                    <div className="Heading">
                        <h1><i className="fa fa-user"> Register </i></h1>
                    </div>
                    <div className="lable">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={'Vendor'}>Vendor</MenuItem>
                            <MenuItem value={'Buyer'}>Buyer</MenuItem>
                        </Select>
                        </FormControl >
                    </div>
                    <Buyer />
                </Stack>
            </div>
        </div>
           
        );
    }

    return (
        <div className="main ">
            <div className="main-box shadow p-3 mb-5 bg-body rounded">
                <Stack spacing={1} direction="column">
                    <div className="Heading">
                        <h1><i className="fa fa-user"> Register </i></h1>
                    </div>
                    <div className="lable">
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={'Vendor'}>Vendor</MenuItem>
                            <MenuItem value={'Buyer'}>Buyer</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                </Stack>
            </div>
        </div>
    );

    
  

}

export default Register;





// export default function BasicSelect() {


//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>

//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }




