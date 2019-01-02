import  React ,{Component } from 'react';
import axios from 'axios';
import Swiper from  'react-id-swiper';
import './swiper.scss'
class Swiperlocal extends Component{
    
    constructor(){
        super();
        this.state={
            swiperitem:[],
            swipernext:[],
            swiperthree:[],
            theweplace:[],
            skin:[],
        
        }
    }
    componentDidMount(){
        axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12780&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            // console.log(resp.data.data.item_list);
            this.setState({
                theweplace:resp.data.data.item_list,
            })
        })
        axios.get('topic/data/T20181229094234589?device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            // console.log(resp.data.data.layout[7].content);//轮播图下一张图
            this.setState({
                swipernext:resp.data.data.layout[6].content.image,
                swiperthree:resp.data.data.layout[7].content.image,
                skin:resp.data.data.layout[9].content.image,
            })
        })
        axios.get('aladdin/get_batch_data?codes=[%22chajian%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            // console.log(resp.data.data.chajian.datas);// 轮播图地址
            this.setState({
                swiperitem:resp.data.data.chajian.datas
            })
        })
    }
    render(){
        const params = {
            autoplay:true,
            loop:true,
            observer:true,
      
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
     return   <div>
                        <Swiper {...params}>

                            {
                        this.state.swiperitem.map(item=>{
                        return    <div  key={item.id} ><img alt=" " src={item.image_url}/></div>
                        })
                    }
           </Swiper>
           <img    style={{"width":"10rem"}}     src={this.state.swipernext} alt=" "/>
           <img  style={{"width":"10rem"}} src={this.state.swiperthree} alt=""/>
           <ul >
               {
                   this.state.theweplace.map((item,index)=>{
                       return <li  style={{"width":"3.2rem","float":"left","border":"2px solid red"}} key={index}><img  style={{"width":"114px","height":"114px"}} alt='' src={item.over_image_url}/></li>
                   })
               }
           </ul>
           </div>
    }
}
export default Swiperlocal;