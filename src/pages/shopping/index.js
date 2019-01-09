import  React,{ Component } from "react";
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd';
class Shopping extends Component{
    constructor(){
        super();
        this.state={
            tokenType:1
        }
    }
componentDidMount(){
    axios({
        url:'http://192.168.2.251:7001/center',
        headers:{
      'Authorization':localStorage['token']
    }
    }).then(resp=>{
        console.log(resp);
        if(resp.data.code===0){
            this.setState({
                tokenType:true
            })
        }
        else {
            this.setState({
                tokenType:false
            })
        }
        console.log(this.state.tokenType);
    })
}
componentWillUnmount(){
    this.setState=(state,callback)=>{
        return;
    }
}
logout=()=>{
    localStorage['token']='';
    this.props.history.push('/person');
}
render(){
    if(this.state.tokenType){
        return <div>
            <h1>用户中心</h1>
        <Button type='primary' onClick={this.logout}>退出</Button>
        </div>
         }else{
        return <Redirect to='/person'/>
    }
}
}
export  default Shopping;