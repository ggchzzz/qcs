import React,{Component} from 'react'
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import './style.scss'
  class Person extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  back=()=>{
    console.log(this.props.history.replace('/'));
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
              rules: [{ required: true, message: '请输入手机号!' }],
            })(
              <Input  placeholder="请输入手机号" />
            )}<img/>
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
            )}<Button >发送验证码</Button>
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
