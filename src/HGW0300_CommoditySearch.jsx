import React, {Component} from 'react'
import './HGW0300_CommoditySearch.less';
import './HGW0004_GoodList.jsx';
import './HGW0004_GoodList.less';

class Search extends Component {
    render () {
        return (
            <div style={{marginLeft:"160px"}}>
               <div style={{height:"281px",width:"1110px",backgroundColor:"#ffffff",
                marginTop:"36px", border:"1px solid #aaaaaa"}}>
                    <SearchClassify/>
                </div>
                    
                <SearchResult/>
                

            </div>
        )
    }
}


/**
地址 导航
 
 */
class SearchClassify extends Component {
    render () {
         return (
            <div style={{}}>
                <div className="searchclassifylink">
                    <span className="">所有分类</span>
                    <span>全部</span>
                    <span className="">醇类、酚酮、醇类、酚酮、醇类、酚酮、醋酸及下游、化纤原料、酚酮、醋酸及下游、化纤原料、醇类、</span>
                    <div className="">醇类、酚酮、醇类、酚酮、醇类、酚酮、醋酸及下游、化纤原料、酚酮、醋酸及下游、化纤原料、醇类、</div>

                </div>
                
               
                <div className="dashedlink"></div>


                <div className="searchclassifylink">
                    <span className="">子类</span>
                    <span >全部</span>
                    <span >醇类、酚酮、醇类、酚酮、醇类、酚酮、醋酸及下游、化纤原料、酚酮、醋酸及下游、化纤原料、醇类、</span>
                </div>
                
                <div className="dashedlink"></div>

                
                <div className="searchclassifylink">
                    <span className="">品牌</span>
                    <span className="">全部</span>
                    <span >醇类、酚酮、醇类、酚酮、醇类、酚酮、醋酸及下游、化纤原料、酚酮、醋酸及下游、化纤原料、醇类、</span>
                </div>
            </div>
        )

    }

}


class SearchResult extends Component {
    render () {
         return (
            <span style={{width:"1030px",marginTop:"32px",float:"left"}}>
                已为您搜索到以下商品：


                {/**商品列表 */}

                <span>
                    <ItemList/>
                    <ItemList/>
                    <ItemList/>
                </span>


                {/**页码 */}
                <div style={{height:"120px",marginTop:"56px",float:"right"}}>
                    <span>上一页</span>
                    <span class="">1</span>
                    <span class="">2</span>
                    <span class="">3</span>
                    <span class="">...</span>
                    <span class="">20</span>
                    <span>下一页</span>
                </div>

            </span>
        )

    }

}




class ItemList extends Component {
    render() {
        return (
            <div  className=''>
               
                <div className='good-list'>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item goodIndex='3'/>
                </div>
            </div>
        );
    }
}


class Item extends Component {
    render(){
        let {goodIndex} = this.props;
        return(
            <div  className={'good-item'} style= {goodIndex==3?{borderRight:"1px solid #D9D9D9"}:null}>
                <img className='good-img' src='./source/gooditem_07.png'/>
                <span className='good-item-title'> 【阿普西龙】1,2-丙二醇 医药级</span>
                <div className='good-item-rule'>
                    <span className='good-item-money'>¥10000/吨</span>
                    <span className='good-item-purity'>纯度/规格:99.7%</span>
                </div>
            </div>
        );
    }
}

export default Search