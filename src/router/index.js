import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from "../pages/main"
import Global from "../pages/global";
import Life from "../pages/life";
import Mask from '../pages/mask';
import Detail from "../pages/main/detail"
import Center from '../pages/center'
import Person from '../components/common/person/person'
import Shopping from '../pages/shopping'
import Cart from '../pages/shopping/cart'
import Order from '../pages/shopping/order'
const App=()=>(

    <BrowserRouter>
    <div>
        <div className="qcs-content">
        <Switch>
            <Route path='/order'  exact component={Order}></Route>
            <Route path='/person' component={Person}></Route>
            <Route path='/' exact component={Main}></Route>
            <Route path='/global'  component={Global}></Route>
            <Route path='/life'  component={Life}></Route>
            <Route path='/mask'  component={Mask}></Route>
            <Route path='/detail' component={Detail}></Route>
            <Route path='/center' component={Center}></Route>
            <Route path='/shopping' component={Shopping}></Route>
            <Route path="/cart"  component={Cart}></Route>
        </Switch>
        </div>
    </div>
    </BrowserRouter>
)
export default App;