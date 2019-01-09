import React,{Component} from 'react';
import axios from 'axios'
import './style.scss'
class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            itemdata:this.props.location.state.data,
            coupons:[],
            ul_item:[],
            footer:[],

        }
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
                return;
        }
    }
    componentWillMount(){
        axios.get('https://h5.watsons.com.cn/act/mop/item/coupons?item_id='+ this.state.itemdata.item_id+'&count=30&offset=0').then(resp=>{
            this.setState({
                coupons:resp.data.data.coupons,
            })
        })
        axios.get("act/mop/aladdin/recommend?source=ITEM_DETAIL&count=30&offset=0&item_id="+this.state.itemdata.item_id+"").then(resp=>{
            this.setState({
                ul_item:resp.data.data.item_list,
            })
        })
        axios.get('item/desc/data/get?item_uid='+this.state.itemdata.item_uid+'').then(resp=>{
            this.setState({
                footer:resp.data,
            })
        })
    }
    render(){
        return <div  className="cart">
                <div style={{"height":"30px"}} ><p  style={{'textAlign':'center',"width":"10rem","fontSize":".48rem","color":"#4a4a4a",'borderBottom':"1px solid #eee"}}>{this.state.itemdata.item_name}</p></div>
                <div><img alt=''  src={this.state.itemdata.over_image_url}/></div>
                <div><p>{this.state.itemdata.item_long_name}</p></div>    
                <div><p className="price">{"￥"+this.state.itemdata.max_app_price/100}</p></div>
                <div style={{"display":"flex","justifyContent":'space-around','color':'#6a6a6a'}}><span>正品保证</span><span></span>满￥68包邮<span></span>7天包邮</div>
                <ul style={{"display":'flex','justifyContent':"space-around",'color':'red'}} >
                    {
                        this.state.coupons.map((item,index)=>{
                         return   <li key={index}>{item.content}</li>
                        })
                    }
                </ul>
                <div>
                        {
                            this.state.itemdata.item_groups.map((item,index)=>{
                                return <p  key={index} style={{"display":'flex','justifyContent':'space-around'}}>
                                <span>{item.activity_brief}</span>
                                <span style={{'width':"6rem"}}>{item.activity_name}</span>
                                </p>
                            })
                        }
                </div>

                <div style={{"display":"flex",'overflowY':'scroll'}}>
                    {
                        
                      this.state.ul_item.map((item,index)=>{
                           return <div key={index} ><img  alt='' style={{"width":"100px","height":"100px"}} src={item.over_image_url}/>
                                    <div><span>{item.item_name.slice(0,14)+"..."}</span></div>
                                    <div><span style={{"color":"red"}}>{"￥"+item.max_app_price/100}</span></div>
                           </div>
                       })
                
                    }
                </div>
                <ul>
                    {
                        this.state.footer.map((item,index)=>{
                            return <li key={index}><img alt=" " src={item}/></li>
                        })
                    }
                </ul>
                <div className="footer">
                    <div>加入购物车</div>
                    <div>立即购买</div>
                </div>
                </div>
    }
    
}
export default Cart;