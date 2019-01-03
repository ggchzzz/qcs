import React,{Component} from 'react'
import axios from 'axios'
import Nav from "./nav/nav"
import Middle from './middle'
import Swiperlocal from './swiper/swiper'
import { Modal } from 'antd';
import './face.scss'
import Header from "../../components/common/"
class Global extends Component{
constructor(){
    super();
    this.state={
            visible: true,
            coverOne:{},//首页大红图
            coverTwo:{},
            banner:{},
            face:[],
    }
    
}
showModal = () => {
    this.setState({
      visible: false,
    });
  }
handleCancel = (e) => {
    this.setState({
      visible:false,
    });
  }
componentDidMount(){
    axios.get('tms/aladdin/get?code=start_alert_image').then(resp=>{
        this.setState({
            face:resp.data.data.datas[0].image_url,
        })
    })
    axios.get('topic/data/T20181229095710968?device_id=cd44de50-0bf0-11e9-9745-f1bff6cbfeba').then(resp=>{
        console.log(resp.data.data.layout)
        this.setState({
            coverOne:resp.data.data.layout[0].content.gifImage,
            coverTwo:resp.data.data.layout[1].content.bg.image,
            nav:[],
        })
        
    })
    
}
    render (){
        return (
            <div>
               <Header/>
                <Modal style={{"backgroundImage":"url("+this.state.face+")","backgroundRepeat":"no-repeat","backgroundSize":"100% 100%"}} visible={this.state.visible}
                  onOk={this.handleOk} onCancel={this.handleCancel} footer={null} >
                {/* <img alt=" " src={this.state.face}/> */}
              </Modal>
            <img  style={{"width":"10rem"}} alt="图片" src={this.state.coverOne} />
            <img style={{"width":"10rem"}} alt="图片2" src={this.state.coverTwo}/>
            <Nav/>
            <Middle/>
            <Swiperlocal/>
            </div>
        
        )
    }
}
export default Global;