import  React,{Component} from 'react'
import axios from 'axios'
import './nav.scss'
class Nav extends Component{
    constructor(){
        super();
       this.state={
           nav:[],
           navbar:[],
           timeRemin:[],
           bg:String,
           Retime:[],
           swiper:[],
           timer:Boolean,
       }
    }
    componentWillUnmount(){
        clearInterval(this.state.timer)
    }
    componentDidMount(){
        axios.get(`activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce`).then(resp=>{
            this.setState({
                swiper:resp.data.data.specials_item_v_o_s,
            })
        })
        this.setState({
      timer:setInterval(()=>{
            let now=(new Date()).getTime();
            let differ=this.state.timeRemin-now;
            let newTime=(new Date(differ)).toTimeString().substring(0,8);
            this.setState({
                Retime:newTime,
            })
        },1000)
    })
        axios.get('aladdin/get_batch_data?codes=["new_header","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
        this.setState({
            nav:resp.data.data.new_Home_4navs_180105_1.datas,
            navbar:resp.data.data.new_Home_coupon_180105_4.datas,
        })
        axios.get('topic/data/T20181229094234589?device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
            this.setState({
                bg:resp.data.data.layout[0].content.bg,
            })
        })
        axios.get('/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=4af9b330-0b23-11e9-89cf-33fe10876299/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=4af9b330-0b23-11e9-89cf-33fe10876299').then(resp=>{
            // console.log(resp.data.data.specials_info_d_t_o.periods[0].end_time);
            this.setState({
                timeRemin: resp.data.data.specials_info_d_t_o.periods[0].end_time
            })
        })
    })
    }
    render(){
        return <div>
            <ul style={{"display":"flex","marginBottom":"0px"}}>{
            this.state.nav.map(item=>{
             return   <li key={item.id}> <img style={{"width":"2.5rem"}}    alt="nav" src={item.image_url}/></li>
            })}   
            </ul>
        <div style={{"display":"flex"}}>{
            this.state.navbar.map(item=>{
             return <div key={item.id}>< img   style={{"width":"5rem"}} alt="图片bar" src={item.image_url}/></div>
            }) }
          </div>
          <div style={{backgroundImage:'url('+this.state.bg+')'}}>
          <p style={{"display":"flex","justifyContent":"space-between"}}><span style={{ "fontWeight":"boild", "color":"white","fontSize":"0.4rem"}}>{`今日秒杀`+this.state.Retime}</span><span style={{"color":"white","fontSize":"0.4rem","fontWeight":'boild'}}>更多好货</span></p>
          <ul style={{"display":"flex","overflowY":"scroll"}} >{
              this.state.swiper.map(item=>{
                  return <li key={item.item_id}  style={{"margin":"10px","backgroundColor":"white"}}><img style={{"width":"2.5rem","height":"3rem"}} alt="swiper" src={item.image_url}/><div className="ellipsis">{item.item_short_name}</div ><p style={{"display":"flex","justifyContent":"space-around"}}><span></span>{item.hasOwnProperty("market_price")===false?" ": item.market_price/100}<span>{item.promotion_price/100}</span></p></li>
              })
          }

          </ul>
          </div>
          
        </div>
    }
}
export default Nav;