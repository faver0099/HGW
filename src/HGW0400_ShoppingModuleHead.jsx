import React, {Component} from 'react'
import './HGW0400_ShoppingModuleHead.less';

class ShoppingModuleHead extends Component {
    render () {
        return (
            <div style={{height:"170px",width:"100%",backgroundColor:"#f5f5f5",}}>
               <div style={{marginLeft:"12%",}}>
                   

                    <span className="ShoppingModuleHead_img" style={{height:"60px",width:"294px",
                    backgroundColor:"#3e90ed",}}>
                        
                        <span className="ShoppingModuleHead_round" style={{marginLeft:"80px"}}>
                            <span className="ShoppingModuleHead_roundtext">1</span>
                        </span>
                        <span className="ShoppingModuleHead_text" style={{marginLeft:"120px",color:"#ffffff"}}>我的购物车</span>

                    </span>


                    <img className="ShoppingModuleHead_img" src="./pg0001_img/商品详情/进展_03.png" alt=""/>

                    <span className="ShoppingModuleHead_img" style={{}}>
                        <img className="" src="./pg0001_img/商品详情/进展_04.png" alt=""/>
                        <span className="ShoppingModuleHead_round">
                            <span className="ShoppingModuleHead_roundtext">2</span>
                        </span>
                        <span className="ShoppingModuleHead_text" style={{}}>填写订单信息</span>
                    </span>

                    <img className="ShoppingModuleHead_img" src="./pg0001_img/商品详情/进展_05.png" alt=""/>
                    
                     <span className="ShoppingModuleHead_img" style={{}}>
                        <img className="" src="./pg0001_img/商品详情/进展_04.png" alt=""/>
                        <span className="ShoppingModuleHead_round">
                            <span className="ShoppingModuleHead_roundtext">3</span>
                        </span>
                        <span className="ShoppingModuleHead_text" style={{}}>确认支付信息</span>
                    </span>
                </div>
                    

            </div>
        )
    }
}





export default ShoppingModuleHead