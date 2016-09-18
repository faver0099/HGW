import React, {Component} from 'react'
import './HGW0401_ShoppingCar.less';


class ShoppingCar extends Component {
    render () {
        return (
            <div style={{marginLeft:"12%"}}>
                <div >
                    <span className="shoppingmodule_tipfont" style={{width:"100%",marginTop:"25px",
                    float:"left"}}>全部商品</span>
                    

                    <div className="shoppingcarTable" style={{height:"45px",width:"1030px",
                        backgroundColor:"#f5f5f5",border:"1px solid #bdbdbd"}}>
                        <label className="shoppingcarTable_titlefont"><input name="Fruit" type="checkbox" value="" />全选 </label> 
                       
                        <span className="shoppingcarTable_titlefont">商品信息</span>
                        <span className="shoppingcarTable_titlefont">单价</span>
                        <span className="shoppingcarTable_titlefont">数量</span>
                        <span className="shoppingcarTable_titlefont">合计金额</span>
                        <span className="shoppingcarTable_titlefont">操作</span>
                    </div>
                    

                    {/** 购物车中的商品列表 */}
                    <ShoppingTableList/>
                    <ShoppingTableList/>
                    <ShoppingTableList/>

                    <span style={{height:"177px",width:"1030px",float:"left",
                        paddingTop:"20px",lineHeight:"40px"}}>
                        <label className="" style={{marginLeft:"30px"}}><input name="Fruit" type="checkbox" value="" />全选 </label>
                        <span style={{marginLeft:"30px"}}>删除选中的商品</span> 
                        


                        <span style={{float:"right",}}>
                            <span >已选中</span>
                            <span>0</span>
                            <span>件商品</span>
                            <span style={{marginLeft:"30px"}}>总价（运费:待定另付）：</span>
                            <span className="shoppingmodule_tipfont">￥158元</span>


                            <span>
                                <a href="http://localhost:7777/HGW0403_ShoppingRetule.html"><span className="infobut" style={{backgroundColor: "#ff8b00"}}>立即购买</span></a>
                            </span>
                        </span>
                    </span>
                    
                </div>
                    

            </div>
        )
    }
}





class ShoppingTableList extends Component {
    render () {
        return (
            <div style={{height:"160px",width:"1030px",backgroundColor:"",
                    float:"left",border:"1px solid #bdbdbd"}}>
                <span className=" ">
                    <label className="orderEntry"><input name="Fruit" type="checkbox" value="" /></label> 
                    <span className="orderEntry">商品信息</span>
                    <span className="orderEntry">￥15.8元</span>
                    <span className="orderEntry ">数量</span>
                    <span className="orderEntry shoppingmodule_tipfont">￥158元</span>
                    <span className="orderEntry">删除</span>
                    
                </span>
            </div>
        )
    }
}




export default ShoppingCar