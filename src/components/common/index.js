import React ,{Component} from 'react'
import {NavLink,Link}  from 'react-router-dom'
import './header.scss'
import {Row,Col, Icon,Input} from 'antd'
class Header extends Component{
  
    render(){
        return (
            <div className='qcs-header'>
            <div className="qcs-search">
                <Row className="header-row">
                        <Link to="/person"><Col span={2}  ><Icon    className="qcs-user" type="user"/></Col></Link> 
						<Col span={20} style={{"paddingLeft":"42px"}}><Input prefix={<Icon type="search"/>}/></Col>
						<Col span={2}><div><Icon className="qcs-shopping" type="shopping-cart"/></div></Col>
                </Row>
            </div>
            <nav className='qcs-menu'>
                <ul>
                <li><NavLink exact to="/" activeClassName='active'>今日推荐</NavLink></li>
                <li><NavLink to="/mask" activeClassName='active'>面膜中心</NavLink></li>
                <li><NavLink to="/life" activeClassName='active'>居家生活</NavLink></li>
                <li><NavLink to="/global" activeClassName='active'>购全球</NavLink></li>
                </ul>
            </nav>
     
            </div>
        )
    }
}
export default Header;







