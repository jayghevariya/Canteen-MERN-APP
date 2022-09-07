import * as React from 'react';

import { useHistory  } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = ({ age , setAges}) => {
    const history = useHistory();
    const ok = () => {history.push('/vendor/vcart')}
    // const yes = () => {history.push('/buyer')}
    useEffect(() => {
 
        ok()
      }, []);

    
        return(
            <div>
                
            </div>
        )
    
}

export default Home;