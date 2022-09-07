import * as React from 'react';
import {useParams} from "react-router-dom";
import Page from './page';

const Fav = () => {
    // const ab = match.params.id
    const {id} = useParams();

    return(
    <div>
        <Page id={id}/>
    </div>
            
    )
}

export default Fav;