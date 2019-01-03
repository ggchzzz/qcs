import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from "../pages/main"
import Global from "../pages/global";
import Life from "../pages/life";
import Mask from '../pages/mask';
import Detail from "../pages/main/detail"
const App=()=>(
    <BrowserRouter>
    <div>
        <div className="qcs-content">
        <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/global'  component={Global}></Route>
            <Route path='/life'  component={Life}></Route>
            <Route path='/mask'  component={Mask}></Route>
            <Route path='/detail' component={Detail}></Route>
        </Switch>
        </div>
    </div>
    </BrowserRouter>
)
export default App;