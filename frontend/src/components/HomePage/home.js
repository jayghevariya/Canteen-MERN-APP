import * as React from 'react';

import { useHistory } from "react-router-dom";
const Home = ({ age , setAges}) => {
    const history = useHistory();
    const ok = () => {history.push('/vendor')}
    const yes = () => {history.push('/buyer')}
    if(age.VB === 'Vendor'){
        return(
            <div>
                <button className="btn btn-primary" onClick={ok}>ok</button>
                {/* {()=>history.push('/vendor')} */}
                {/* {console.log(age)} */}
                {/* <Buyer age={age} setAges={setAges}/> */}
            </div>
        )
        
    }

    if (age.VB === 'Buyer') {
        
        return(
            <div>
                <button className="btn btn-primary" onClick={yes}>ok</button>
                {/* {()=>history.push('/buyer')} */}
                {/* {console.log(age)} */}
                {/* <Buyer age={age} setAges={setAges}/> */}
            </div>
        )
    }
}

export default Home;