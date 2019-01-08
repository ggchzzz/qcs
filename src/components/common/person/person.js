import React from 'react'
import {
    Form, Icon, Input, Button
  } from 'antd';
import axios from 'axios'
import './style.scss'
  class Person extends React.Component {
    constructor(){
      super();
      this.state={
        username:'',
        disabled:false,
        Buttontext:'发送验证码'
      }
    }
    disabled=()=>{
      
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        var params=new URLSearchParams();
        console.log(values.userName,values.phoneIdentify);
        params.append('phone',values.userName);
        params.append('smsCode',values.phoneIdentify);
        console.log('Received values of form: ', values);
        if (!err) {
         axios({
           method:'post',
           url:'http://192.168.2.251:7001/user/login',
           data:params,
         }).then(resp=>{
           if(resp.data.code===0){
             console.log(this.props);
             localStorage['token']=resp.data.data.token;
             this.props.history.push('/center');
           }
         })
         
        }
      });
    }
  back=()=>{
    console.log(this.props.history.replace('/'));
  }
  componentWillUnmount(){
    this.setState=(state,callback)=>{
        return;
    }
}
  number=(ev)=>{
    console.log(ev.target.value);
    this.setState({
      username:ev.target.value,
    })
  }
  send=()=>{
    axios.get("http://192.168.2.251:7001/sms/addSms?phone="+this.state.username+"").then(resp=>{
      console.log(resp.data);
      axios.get("http://192.168.2.251:7001/sms/querySms?phone="+this.state.username+"").then(resp=>{
        console.log(resp.data);
        this.setState({
          disabled:true,
        })
        let i=60;
        let timer=setInterval(() => {
        this.setState({
          Buttontext:'重发('+i+'s)',
        })
        if(i<=0){
          this.setState({
            Buttontext:"获取验证码",
            disabled:false,
          })
          clearInterval(timer);
        }
        i--;
      }, 1000);
      })
     });
  }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div className='Person'>                        
           <div ><span> <Icon   onClick={this.back} type="left"/></span><span style={{"fontSize":".48rem","color":"#4a4a4a",'position':"absolute",'marginLeft':"3.3rem"}} >登录/注册</span></div>
           <div style={{"position":"relative",'marginTop':"1rem" ,"height":".4rem","lineHeight":".4rem","paddingLeft":"20px 10px"}}>商城全新版本上线，手机登录更安全哦</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入手机号!' },
              // {pattern:/^187\d[8]$/,message:"请输入正确的格式"},
            ],
            })(
              <Input onInput={this.number}placeholder="请输入手机号" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pictureIdentify', {
              rules: [{ required: true, message: '请输入验证码!' }],
            })(
              <Input  placeholder="请输入图片验证码"/>
            )}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('phoneIdentify', {
              rules: [{ required: true, message: '请输入手机验证码'}],
            })(
              <Input  placeholder="请输入验证码" />
            )}<Button disabled={this.state.disabled} onClick={this.send}>{this.state.Buttontext}</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录/注册
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    }
  }
  
  export default Form.create()(Person);
