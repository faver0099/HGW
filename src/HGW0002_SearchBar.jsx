
import React, {Component} from 'react';
import './HGW0002_SearchBar.less';

class SearchBar extends Component {
    render () {
        return (
   
          
            <div>
                  <form action="" method="get" className="searchBar">

                  <img className="searchBarimg" src="../pg0001_img/首页_03.png" ></img>
                    
                    <span className="searchBarinput">
                        <input name="" type="text" placeholder="请输入你想查的名称" className="searchBarinputbut"/>
                    </span>
                    
                    
                    <a href="http://localhost:7777/HGW0300_CommoditySearch.html">
                        <span className="searchBarbut">
                            <input name="" type="button"/>
                        </span>
                    </a>	
                   

                
                    <a href="http://localhost:7777/HGW0400_ShoppingModule.html">
                        <span className="shopcardiv">
                            <img className="shopcarimg" src="../pg0001_img/未标题-1_08.png" ></img>
                            <span className="shopcarspan">我的购物车</span>
                        </span>
                    </a>
                
                    <br/><br/>
                    <span className="searchTip">酸脂、醇醚、化纤原料等 酸脂、醇醚、化纤原料等</span>
                
                </form>

                <Cataloguehead/>

            </div>

           
        )
    }
}


class Cataloguehead extends Component {
    render () {
        return (

                 <div className="cabar">
                    <span className="dirhead">
                        <div className='transparent'></div>      
                        <div className='menutext'>全部商品分类</div>
                    </span>
                        <a className="cabarLink" href="http://localhost:7777/" ><span className="bartext">首页</span></a>
                        <a className="cabarLink" href="" ><span className="bartext">商城</span></a>
                        <a className="cabarLink" href="" ><span className="bartext">找物流</span></a>
                        <a className="cabarLink" href="" ><span className="bartext">找资金</span></a>
                        <a className="cabarLink" href="" ><span className="bartext">行业资讯</span></a>
                </div>

           
        )
    }
}

       


export default SearchBar;























