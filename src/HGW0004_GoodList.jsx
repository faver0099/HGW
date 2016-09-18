import React, {Component} from 'react';
import './HGW0004_GoodList.less';

class GoodView extends Component{
    render(){
        return (
            <div className='good-view'>
                <GoodList/>
                <GoodList/>
                <GoodList/>
            </div>

        );
    }
}

class GoodList extends Component {
    render() {
        return (
            <div  className='good-list-head'>
                <div className='good-list-title'>
                    <span className='good-list-menu-title'>| 醇类、酚酮、酸醋</span>
                    <span className='good-list-more'>+更多</span>
                </div>
                <div className='good-list'>
                    <Good/>
                    <Good/>
                    <Good/>
                    <Good goodIndex='3'/>
                </div>
            </div>
        );
    }
}


class Good extends Component {
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


export default GoodView;