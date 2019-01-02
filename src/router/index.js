import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from "../pages/main"
import Global from "../pages/global";
import Life from "../pages/life";
import Mask from '../pages/mask';
import Header from '../components/common/header'
const App=()=>(
    <BrowserRouter>
    <div>
        <Header/>
        <div className="qcs-content">
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/global'  component={Global}></Route>
            <Route path='/life'  component={Life}></Route>
            <Route path='/mask'  component={Mask}></Route>
        </Switch>
        </div>
    </div>
    </BrowserRouter>
)
export default App;