import React, {Component} from 'react'
import './HGW0403_ShoppingRetule.less';
import './HGW0401_ShoppingCar.less';


class ShoppingRetule extends Component {
    render () {
        return (
            <div style={{height:"595px",float:"left",marginLeft:"12%"}}>
                <div>
                    <span className="" style={{width:"100%",marginTop:"25px",
                    float:"left"}}>支付信息</span>
                </div>
                

                 {/*这是注释*/}
                <span style={{width:"1030px",height:"455px",float:"left",border:"1px solid #bdbdbd",marginTop:"25px"}}>
                        <span style={{ marginTop:"125px",marginLeft: "300px",float:"left"}}>  

                            {/* 打勾图片  */}
                            <span className="ShoppingRetule_round"></span>
                            <img src="./pg0001_img/未标题-2_03.png" alt="" style={{ position:"absolute",}}/>
                            
                            {/*确认信息*/}
                            <span style={{marginLeft:"110px", position:"absolute"}}>  
                                <span>您已成功支付</span>
                                <span className="shoppingmodule_tipfont">1,000.00元</span>
                                <div style={{marginTop:"10px"}}>您确认收货前，商家不会收到贷款，由平台担保</div>
                                <div style={{marginTop:"24px"}}>订单编号：YL100002016072611</div>
                                <a className="retule_a" href="" ><div style={{marginTop:"10px"}}>查看购买的商品</div></a>
                            </span>
                        </span>
                        
                    
                  
                </span>

            </div>
        )
    }
}









export default ShoppingRetule




