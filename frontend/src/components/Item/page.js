import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Page = ({ id }) => {

    const [SearchItem, setSearchItem] = React.useState({ Food: {} });
    const age = { id: id }
    const functio = () => {
        axios.post("http://localhost:9002/page", age)
            .then(
                (res) => {
                    // console.log(res.data);
                    setSearchItem({
                        Food: res.data
                    })

                }
            )

    }
    const history = useHistory();
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        functio();

    }, []);

    return (
        <div className="main">
            <div className="main-box shadow p-3 mb-5 bg-body rounded">
                <div class="card widdd" style={{ textAlign: 'center', marginLeft: 15, marginTop: 15 }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{SearchItem.Food.FoodItemName}</h5>
                        <p class="card-text"><i className="fa fa-rupee"></i>{SearchItem.Food.Price}</p>
                        <p class="card-text">Shop: {SearchItem.Food.ShopName}</p>
                        <p class="card-text">Rating: {SearchItem.Food.Rating}</p>
                        <p class="card-text">{SearchItem.Food.VN === "V" ? "Vej" : "Non Vej"}</p>
                        {/* <button href="#" class="btn btn-primary" >More About Item</button> */}
                        <button class="btn btn-outline-primary heartbtn" onClick={()=>history.push('/')}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;