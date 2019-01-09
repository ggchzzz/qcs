import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {Button}  from "antd";
import './style.scss'
class Center extends Component{
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
        return <div className="center">
        <div style={{"width":"10rem",'height':"170px",'backgroundColor':"aqua","position":"absolute",'top':'0px'}}>
            <div className="center_div"><img  alt='' className="center_image"  src="http://image.watsons.com.cn/upload/hahy4f2323.png"/></div>
            <div  style={{"border":"1px solid black","width":"85px",'height':"26px",
            "position":'absolute','right':'16px','bottom':"6px",'borderRadius':"20%",'lineHeight':'26px','textAlign':'center',
            'backgroundColor':'#107d64','color':'white'
        }}>回到首页</div>
        </div>
        <div style={{"position":'relative','top':"170px"}}>
        <div style={{"height":"30px",'border':"1px solid #eee",'fontWeight':"800",'lineHeight':'30px'}}>全部订单</div> 
        <ul style={{"display":'flex','justifyContent':'space-around'}}>
            <li>待付款</li>
            <li>待收货</li>
            <li>代发货</li>
            <li>待评价</li>
            <li>退货</li>
        </ul>
        </div>
        <Button  style={{'bottom':"0px",'position':"absolute"}} type='primary' onClick={this.logout}>退出</Button>
        </div>
         }else{
        return <Redirect to='/person'/>
    }
}
}
export default Center;