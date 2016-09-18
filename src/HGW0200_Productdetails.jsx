import React, {Component} from 'react'
import './HGW0200_Productdetails.less';

class Productdetails extends Component {
    render () {
        return (
            <div >
                <div className="dressdiv">
                    <Dress/>

                    <div className="info">
                        <Info/>
                    </div>
                </div>
                
                <div style={{height:"700px", width:"100%",backgroundColor:"#fffffff",float:"left"}}>
                    <RecommendedPage/>
                    <Details/>
                </div>
            </div>
        )
    }
}


/**
地址 导航
 
 */
class Dress extends Component {
    render () {
         return (
            <div>
                <span className="dress">您的位置：化工网>商城>酚酮>3-甲氧基丙酸甲脂</span>
            </div>
        )

    }

}


class Info extends Component {
    render () {
         return (
            <span>
                <span>
                    <img className="infoImg1" src="./pg0001_img/商品详情/商品详情_03.png"></img>
                </span>

                <span className="infotext">
                    <span className='infotitle'>
                        优级苯已烯 现货齐鲁石化苯乙烯 国标 乙烯基苯
                    </span>
                    <div className='infospan'>

                        <div className='infolink'>
                            <span className="infofont">产品：优级苯乙烯</span>
                            <span>规格/纯度：99%</span>
                        </div>
                    
                        <div className='infolink'>
                            <span className="infofont">起订量：100</span>
                            <span >库存量：1001</span>
                        </div>
                       
                        <div className='infolink'>
                            <span className="">物流费用：</span>
                            <span className="infotipfont">该商品运输费用待生成订单后，根据实际情况和您沟通确定</span>
                        </div>
                        

                        <div className='infolink'>
                            <span >购买数量：</span>
                            <span className=''>-</span>
                            <input type='text' className='good-num-input' defaultValue='200'/>
                            <span className=''>+</span>
                            <span className=''>件 (注：100千克/件)</span>
                        </div>

                        <div className='infolink'>
                            <span className="">价格：</span>
                            <span className="infotipfont" style={{fontSize:"16px",fontWeight:"900",marginRight:"10px"}}>￥1000.00</span>元
                        </div>

                        <div>
                            <a href="http://localhost:7777/HGW0400_ShoppingModule.html"><span className="infobut">加入购物车</span></a>
                            <a href=""><span className="infobut" style={{backgroundColor: "#ff8b00"}}>立即购买</span></a>
                        </div>


                    </div>

                </span>

                
            </span>
        )

    }

}




class RecommendedPage  extends Component {
    render () {
         return (
            <span style={{height:"570px", width:"260px",
            backgroundColor:"#ffffff",float:"left",marginTop:"36px",marginLeft:"160px",
            border:"1px solid #aaaaaa"}}>
                <span className="modleTitle">推荐产品</span>
                <img className="" src="./pg0001_img/商品详情/商品详情_11.png" 
                    style={{marginTop:"22px",textIndent:"50px",float:"left",
                    marginLeft:"40px"}}></img>
            </span>

        )
    }
}

class Details extends Component {
    render () {
         return (
            <span style={{height:"570px", width:"820px",
            backgroundColor:"#ffffff",float:"left",marginTop:"36px",marginLeft:"20px",
            border:"1px solid #aaaaaa"}}>
                <span className="modleTitle" style={{width:"800px"}}>产品详情</span>
                <div type="" style={{marginTop:"22px",textIndent:"50px",float:"left",
                marginLeft:"20px",marginRight:"30px"}}>乙二胺四乙酸二钠又叫做EDTA-2Na，是化学中一种良好的配合剂，它有六个配位原子，
                    形成的配合物叫做鳌合物，EDTA在配位滴定中经常用到，一般是测定金属离子的含量。
                    EDTA在染料、食品、药品等工业上有重要用途。
                    是化学中一种良好的配合剂，它有六个配位原子，形成的配合物叫做鳌合物，EDTA在配位
                    滴定中经常用到，一般是测定金属离子的含量。EDTA具有广泛的配位性能，几乎能与所有的金属
                    离子形成稳定的螯合物。有利之处：提供了广泛测定元素的可能性。</div>
                
                <img className="" src="./pg0001_img/商品详情/商品详情_14.png" 
                    style={{marginTop:"22px",textIndent:"50px",float:"left",
                    marginLeft:"200px"}}></img>

            </span>


        )
    }
}


export default Productdetails