import React,{Component} from  'react'
import axios from 'axios'
class Banner extends Component{
    constructor(){
        super();
        this.state={
            banner:[],
        }
    }
    componentDidMount(){
        axios.get('tms/aladdin/get?code=Mask_center_banner_index_1').then(resp=>{
            // console.log(resp.data.data.datas[0].image_url);
            this.setState({
                banner:resp.data.data.datas[0].image_url,
            })

        })
    }
    render(){
        return <div>
                <img src={this.state.banner}  alt="顶图"style={{"width":"10rem"}}/>
                <div style={{"backgroundImage":"url("+'//asset.watsons.com.cn/act/static/images/mask-center/442af5844f137440b999ff5c7.png'+")", 'backgroundRepeat':"no-repeat","backgroundSize":'cover','height':'2.3rem'}}>
                    <div style={{"position":"relative","paddingTop":".4rem","marginLeft":"3.5rem",'zIndex':"1"}}> 
                        <p style={{"fontSize":'.48rem',"fontWeight":700,'textDecoration':"underline"}}> 登录查看抢购资格</p>
                        <p style={{"fontSize":".3rem","marginTop":".2rem"}}> 抢购资源可用于购买本活动优惠价商品</p> 
                  </div>
                </div>
                <div style={{"position":"relative","padding":".4rem .4rem .5rem","boxSizing":"border-box"}}>
                    <div  >
                        <p style={{"fontSize":".5rem","fontWeight":700,"marginBottom":"1px"}}>特权面膜抢购</p>
                        <p style={{"fontSize":".3rem",'fontWeight':400,"paddingTop":".2rem"}} >每件最多限购三件</p>
                    </div>
                    <img  alt="东二张图" style={{"position":"absolute","top":"50%","transform":"translateY(-50%)","right":".4rem",'width':"5rem","height":".6rem"}} src="//asset.watsons.com.cn/act/static/images/mask-center/f32ab5c224e50c8935e6b23ec.png"/>
                </div>
            </div>
    }
}
export default Banner;