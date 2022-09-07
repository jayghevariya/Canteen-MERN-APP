import axios from 'axios';
import * as React from 'react';
import { useHistory } from 'react-router';

const Wallet = ({ age, setAges }) => {

    // const deletess = () => {
    //     const id = prop.FoodId;
    //     const id2 = user._id;
    //     console.log(prop)
    //     let abc = {FoodId:id,ManId:id2}
    //     axios.post("http://localhost:9002/del",abc)
    //         .then( (res) => {
    //             // console.log(res.data)
    //             setSearchItem({
    //                 ...SearchItem,
    //                 Fav: res.data
    //             })
    //         } )
    // }
    const [mo, setMo] = React.useState("")
    const money = parseInt(age.Wallet)
    
    const handleEvent = (event) => {
        const {  value } = event.target;
        setMo(
            value
        );

    };
    const backend = () => {
        axios.post("http://localhost:9002/wallet",age)
            .then(res => alert(res.data.message))
    }
    const dos = ()=>{
        const addd = parseInt(mo)
        const total = addd + money
        setAges({
            ...age,
            Wallet: total
        })

       
        backend();
        
        
        
    }
    const history = useHistory();

    return (
        <div>
            <div class="card widdd" style={{ textAlign: 'center', marginLeft: 15, marginTop: 15 }}>

                <div class="card-body">
                    <h5 class="card-title">Money : {age.Wallet}</h5>
                    <input onChange={handleEvent} ></input>
                    <button className="btn btn-primary" style={{marginTop:10}} onClick={dos}>Add Money</button>
                    <button class="btn btn-outline-success" type="Profile" style={{marginTop:10, marginLeft:10}} onClick={ () => {history.push('/buyer'); backend()}}>Back</button>
                </div>
            </div>
        </div>


    )
}

export default Wallet;