import  React ,{Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Swiper from  'react-id-swiper';
import './swiper.scss'
class Swiperlocal extends Component{
     
    constructor(props){
        super(props);
        this.state={
            swiperitem:[],
            swipernext:[],
            swiperthree:[],
            theweplace:[],
            skin:[],
            skinone:[],
            skintwo:[],
            skinthree:[],
            skinfour:[],
            grouplistone:[],
            sixplace:[],
            grouplistwo:[],//爱物格林马兰
            grounlistfour:[],//资生堂
            footer:[],
            footerone:[],
        }
    }
  

    componentDidMount(){
        axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12782&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            // console.log(resp);
            this.setState({
                grounlistfour:resp.data.data.item_list,
            })
        })
        axios.get('aladdin/get_batch_data?codes=[%22new_header%22,%22new_Home_topBig_forcase_180105_1%22,%22new_Home_4navs_180105_1%22,%22new_Home_coupon_180105_4%22,%22Home_pingo_170505_5%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            // console.log(resp.data.data.Home_CategaryNavs_170505_7.datas);
            this.setState({
                footer:resp.data.data.Home_TopicCase_170505_7.datas,
                footerone:resp.data.data.Home_CategaryNavs_170505_7.datas
            })
        })
        axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12545&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            // console.log(resp.data.data.item_list);
            this.setState({
                grouplistwo:resp.data.data.item_list,
            })
        })
        axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12781&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            this.setState({
                    grouplistone:resp.data.data.item_list,
            })
        })
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
                skinone:resp.data.data.layout[11].content.image,
                skintwo:resp.data.data.layout[13].content.image,
                skinthree:resp.data.data.layout[15].content.image,
                skinfour:resp.data.data.layout[17].content.bg.image
            })
        })
        axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12543&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            this.setState({
                sixplace:resp.data.data.item_list,
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
                        return    <div  key={item.id} ><img  style={{"width":"10rem"}} alt=" " src={item.image_url}/></div>
                        })
                    }
           </Swiper>
           <img    style={{"width":"10rem"}}     src={this.state.swipernext} alt=" "/>
           <img  style={{"width":"10rem"}} src={this.state.swiperthree} alt=""/>
           <ul >
               {
                   this.state.theweplace.map((item,index)=>{
                       return <li  style={{"width":"3.3rem","float":"left","border":"2px solid red"}} key={index}><img  style={{"width":"114px","height":"114px"}} alt='' src={item.over_image_url}/></li>
                   })
               }
           </ul>
           <div><img  style={{"width":"10rem","height":"150px"}} alt=" " src={this.state.skin}/></div>
           <ul style={{'width':"10rem","height":"228px"}}> 
               {
                   this.state.grouplistone.map((item,index)=>{
                       return <li   key={index} style={{"float":"left","border":"2px solid red"}}><img   alt="  "  style={{"width":"3.2rem"}} src={item.over_image_url}/></li>
                   })
               }
           </ul>
           <div><img  style={{"width":"10rem"}}  alt=" " src={this.state.skinone}/></div>
           <ul style={{"width":"10rem"}}>
               {
                   this.state.sixplace.map((item,index)=>{
                                        return <li key={index}  style={{"width":"3.3rem","float":"left",'border':"2px solid red"}}><img  style={index<6?{"width":"3.2rem","height":"114px"}:{"display":"none"}} alt="  " src={item.over_image_url}/></li>
                   })
               }
           </ul>
           <div><img src={this.state.skintwo} alt="" style={{"width":"10rem","height":"150px"}}/></div>
             <ul>
               {
                   this.state.grouplistwo.map((item,index)=>{
                       return <li key={index}  style={{"width":"3.3rem","float":"left",'border':"2px solid red"}}><img  style={{"width":"3.2rem","height":"114px"}}src={item.over_image_url} alt=""/></li>
                   })
               }
           </ul>
        <Link to="/detail"   > <div  ><img alt=" " src={"//image.watsons.com.cn//upload/3965e404.jpg"} style={{"width":"10rem","height":"150px"}}/></div></Link>
           <div><  img   alt=' '  style={{"width":"10rem","height":"150px"}} src={this.state.skinthree}/></div>
           <ul>
               {
                   this.state.grounlistfour.map((item,index)=>{
                        return <li style={{"width":"3.2rem","float":"left","border":"2px solid red"}} key={index}><  img   alt=" " style={{"width":"3.2rem","height":"114px"}}  src={item.over_image_url}/></li>
                   })
               }
           </ul>
           <div><img  style={{"width":"10rem","height":"10rem"}}alt=" " src={this.state.skinfour}/></div>
           <ul>
               {
                   this.state.footer.map((item,index)=>{
                       return <li key={index} ><   img style={{"width":"10rem","height":"200px","margin":"2px 0"}}  alt="" src={item.image_url}/></li>
                   })
               }
           </ul>
           <ul>
               {
                   this.state.footerone.map((item,index)=>{
                       return <li    style={{"width":"4.5rem","float":"left"}} key={index}><img  alt=" "   style={{"width":"4.5rem","height":"100px"}} src={item.image_url}/></li>
                   })
               }
           </ul>
           </div>
           
    }
}
export default Swiperlocal;