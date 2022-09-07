import * as React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login/login';
import Register from './components/Register/register';
import Home from './components/HomePage/home';
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import Profile from './components/HomePage/profile'
import Profilev from './components/HomePage/profilev'
import Itemsss from './components/Item/item'
import Cart from './components/HomePage/Cart-Buyer/cart'
import VCart from './components/HomePage/Cart-Buyer/vcart'
import Wallet from './components/HomePage/Cart-Buyer/wallet'
import Dummy from './components/HomePage/Cart-Buyer/dummy'
import Buyer from './components/HomePage/buyer';
import Vendor from './components/HomePage/vendor';
import AddFood from './components/HomePage/addFood';
import Status from './components/HomePage/status';
import EditFoodItem from './components/HomePage/editFoodItem';


const App = () => {
    const [age, setAges] = React.useState({});
   
    
        return(
            <div>
                {/* <Login /> */}
                {/* <Register /> */}
                {/* <Home /> */}
                <Router>
                    <Switch>
                        { console.log(age) }
                        <Route path="/login" exact ><Login setAges={setAges}/></Route>
                        <Route path="/register" exact><Register /></Route>
                        
                        <Route path="/profileBuyer" exact><Profile age={age} setAges={setAges}/></Route>
                        <Route path="/profileVendor" exact><Profilev age={age} setAges={setAges}/></Route>
                        <Route path="/addFood" exact><AddFood age={age} setAges={setAges}/></Route>
                        <Route path="/buyer/cart" exact><Cart age={age} setAges={setAges}/></Route>
                        <Route path="/buyer/wallet" exact><Wallet age={age} setAges={setAges} /></Route>
                        <Route exact path="/" exact> {age && age._id ? <Home age={age} setAges={setAges}/> : <Login setAges={setAges} />} </Route>\
                        
                        <Route path="/vendor" exact><Vendor age={age} setAges={setAges}/></Route>
                        <Route path="/vendor/status" exact><Status age={age} setAges={setAges}/></Route>
                        <Route path="/buyer" exact><Buyer age={age} setAges={setAges}/></Route>
                        {/* <Route path="/vcart" exact><Dummy age={age} setAges={setAges}/></Route> */}
                        <Route path="/vendor/vcart" exact><VCart age={age} setAges={setAges}/></Route>
                        <Route path="/buyer/:id">
                            <Itemsss />
                        </Route>
                        <Route path="/vendor/:id"><EditFoodItem age={age} setAges={setAges}/></Route>
                    </Switch>
                </Router>
            </div>
        );
    
}




ReactDOM.render(
  <App />,
  document.querySelector("#root")
)