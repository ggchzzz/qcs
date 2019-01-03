import React,{Component} from 'react'
import axios from 'axios';

import  './midle.scss'

class Middle extends Component{
    constructor(){
        super();
        this.state={
            dateitemone:[],
            dateitemtwo:[],
            dateitemthree:[],
            sixplace:[],
            twelvePlace:[],
            swiperitem:[]
        }
    }
  componentDidMount(){
     
      axios.get('topic/data/T20181229094234589?device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
        //   console.log(resp.data.data.layout[3].content.bg.image)//六宫格大图
          this.setState({
              sixplace:resp.data.data.layout[3].content.bg.image,
          })
      })
      axios.get('item/ws/group_list?current_page=1&page_size=24&group_id=12780&device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
        console.log(resp.data.data.item_list) ; 
        this.setState({
              twelvePlace:resp.data.data.item_list,
          })
      })
      axios.get('topic/data/T20181229094234589?device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
        
        this.setState({
              dateitemthree:resp.data.data.layout[2].content.gifImage,
          })
      })
      axios.get('topic/data/T20181229094234589?device_id=89a67640-0c22-11e9-bfc9-0376c9d7a9ce').then(resp=>{
        this.setState({
            dateitemone:resp.data.data.layout[0].content.bg,
            dateitemtwo:resp.data.data.layout[1].content.bg.image,
        })
      })
  }
  render(){
    return  <div>
                 <ul style={{"backgroundImage":"url("+this.state.dateitemone+")"}}>
                <li><img alt=" " style={{"width":"10rem"}} src={this.state.dateitemtwo}/></li>
                <li><img alt=" " style={{"width":"10rem"}}src={this.state.dateitemthree}/></li>
                <li><img alt="" style={{"width":"10rem"}} src={this.state.sixplace}/></li>
                {
                         this.state.twelvePlace.map(item=>{
                             return <li  style={{"float":"left","width":"33%","border":"2px solid red"}} key={item.item_id}  ><img  alt=" 111" style={{"width":"3rem","height":"3rem"}} src={item.over_image_url}/>
                             <div className="sellOutTiitle">
                                 <span>{item.item_long_name.slice(0,21)}</span>
                                 {/* <span className="ccc"></span> */}            
                             </div>
                             <div style={{"display":"flex",'justifyContent':"space-around"}}><span style={{"color":"red","fontSize":"0.3rem"}}>{item.max_market_price/100}</span><span>{item.max_price/100}</span><span>1111</span></div>
                             </li>
                         })
                     }
                 </ul>
                 
                 </div>
  }
}
export default Middle;