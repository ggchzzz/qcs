import React,{Component} from 'react';
import {Button} from 'antd'
import axios from 'axios'
import './style.scss'
import Axios from 'axios';
class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            headericon:[],
            shopTyoe:false,
            shopArr:[]
        }
    }
    componentDidMount(){
        axios.get('trade/cart').then(resp=>{
            console.log(resp);
        })
        let arr=JSON.parse(localStorage.getItem('cart'));
        console.log(arr);
        if(arr!=null&& arr.length){
            this.setState({
                shopTyoe:true,
                shopArr:arr
            })
        }
    }
    goHome=()=>{
        this.props.history.push('/');
        
    }
    render(){
        console.log(this.state.shopArr)
        return <div className='order'>
        
        
        </div>
    }
}
export default Order;