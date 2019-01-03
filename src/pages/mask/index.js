import React,{Component} from 'react'
import Banner from './banner'
import Limit from './limit'
import Header from "../../components/common/"
class Mask extends Component{
    render (){
        return (
            <div>
            <Header/>
            <Banner/>
            <Limit/>
            </div>
            )
    }
}
export default Mask;