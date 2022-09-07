import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Page = ({ id }) => {

    const [SearchItem, setSearchItem] = React.useState({ Food: {} });
    const [news, setNews] = React.useState({ FoodItemName: "", Price: "", VN: "" });
    const age = { id: id }
    const functio = () => {
        axios.post("http://localhost:9002/editItem", age)
            .then(
                (res) => {
                    // console.log(res.data);
                    setSearchItem({
                        Food: res.data[0],

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNews({
            ...news,
            [name]: value
        });

    };

    const save = () => {
        if (news.FoodItemName &&
            news.Price &&
            news.VN) {
            const pass = { news: news, Food: SearchItem.Food }
            axios.post("http://localhost:9002/editFoodIt", pass)
                .then(
                    (res) => {
                        // console.log(res.data);
                        // setSearchItem({
                        //     Food: res.data[0],

                        // })


                    }
                )
        }
    }

    return (
        <div className="main">
            {console.log(SearchItem)}
            {console.log(news)}
            <div className="main-box shadow p-3 mb-5 bg-body rounded">
                <div class="card widdd" style={{ textAlign: 'center', marginLeft: 15, marginTop: 15 }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        {/* <h5 class="card-title">{SearchItem.Food.FoodItemName}</h5>
                        <p class="card-text"><i className="fa fa-rupee"></i>{SearchItem.Food.Price}</p>
                        <p class="card-text">Shop: {SearchItem.Food.ShopName}</p>
                        <p class="card-text">Rating: {SearchItem.Food.Rating}</p>
                        <p class="card-text">{SearchItem.Food.VN === "V" ? "Vej" : "Non Vej"}</p> */}
                        {/* <button href="#" class="btn btn-primary" >More About Item</button> */}
                        <label for="exampleFormControlInput2" class="form-label">Food Item Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" value={news.FoodItemName} name="FoodItemName" onChange={handleChange} />
                        <label for="exampleFormControlInput4" class="form-label">Price</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" value={news.Price} name="Price" onChange={handleChange} />
                        <label for="exampleFormControlInput3" class="form-label">Vej/Non Vej</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" value={news.VN} name="VN" onChange={handleChange} />
                        <button class="btn btn-outline-primary heartbtn" onClick={() => save()}>Save</button>
                        <button class="btn btn-outline-primary heartbtn" onClick={() => history.push('/vendor')}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;