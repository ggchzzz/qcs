import React,{Component} from 'react'
import axios from 'axios'
import {Button, Progress} from 'antd'
class Limit extends Component{
    constructor(){
        super();
        this.state={
            limitdata:[],
        }
    }
    componentDidMount(){
        axios.get('activity/specials/info?code=Mask_center_products_index_4&access_token=undefined').then(resp=>{
            console.log(resp.data.data.specials_item_v_o_s);
            this.setState({
                limitdata:resp.data.data.specials_item_v_o_s,
            })
        })
    }
    render(){
        return(
            <div>   
                <div>        
                    {
                        this.state.limitdata.map((item,index)=>{
                            return <div  key={index} style={{"display":"flex","height":"3.4rem",    "padding": ".2rem .3rem 3.8rem"}}>
                                    <div >
                                        <div style={{"position":"absolute",'fontSize':".32rem","color":"#0fff","textAlign":"center",'backgroundColor':'#ff6692',"paddingTop":".13rem","width":"1.06rem","height":"1.06rem"}}>
                                             <div>限量</div>
                                             <div style={{"fontWeight":"700"}}>{item.stock_all}</div>     
                                        </div>
                                        <img  style={{"width":"3.4rem","height":"3.4rem"}}  src={item.image_url}  alt={item.sku_name}/>
                                         
                                    </div>
                                    <div>
                                        <div className="shortname">{item.item_short_name}</div>
                                        <div style={{"paddingTop":"0.3rem"  , "display":"flex","alignItems":"flex-end","flexDirection":"row",'justifyContent':"space-between"}}> 
                                            <div>
                                                <div style={{"width":"4rem","color":"#ff6692","display":"flex","flexDirection":"row",'alignItems':"flex-end"}}>
                                                <span style={{"lineHeight":"30px"}}> 抢购价&yen;</span>
                                                <span style={{"color":"red","fontSize":"30px"}}>{item.radix}</span>
                                                <span style={{"lineHeight":"30px",'color':'#dad8d8','fontWeight':"400",'marginLeft':"0.2rem"}}>&yen;{item.market_price/100}</span>
                                                </div>
                                                <div style={{'width':"4rem"}}>
                                                    <Progress strokeColor="#ff6692" percent={(item.stock_all-item.stock_left)/item.stock_all*100} width={200}   showInfo={false} />
                                                </div>
                                                <div>{item.stock_all-item.stock_left}/{item.stock_all}</div>
                                            </div>
                                            <div><Button style={{"backgroundColor":"#ff6692"}} type="primary">抢购</Button></div>
                                        </div>                                        
                                    </div>
                                   </div>
                        })
                    }
                </div> 
            </div>
        )
    }
}
export default Limit;