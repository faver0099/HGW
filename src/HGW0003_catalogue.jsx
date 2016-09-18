
import React, {Component} from 'react';
import './HGW0003_catalogue.less';






class Catalogue extends Component {
    render () {
        return(
          
            <div className="dirback">
                <span className="dir">
                    <a className="cabarLink" href="http://localhost:7777/HGW0200_Productdetails.html"><div className='menutext'>酸脂、醇醚、化纤原料</div></a>
                    <div className='menutext'>酸脂、醇醚、化纤原料</div>
                    <div className='menutext'>酸脂、醇醚、化纤原料</div>
                    <div className='menutext'>酸脂、醇醚、化纤原料</div>
                    <div className='menutext'>酸脂、醇醚、化纤原料</div>
                </span>


                <span className="shoplist">
                    <MenuListItem/>
                    <div className="link"></div>
                </span>
            </div> 
        )
    }
}





class MenuListItem extends Component {
    render(){
        return(
            <div className='menu-list-item'>
                <MenuSubListItem />
                <MenuSubListItem productid="1" />
            </div>
        );
    }
}







class MenuSubListItem extends Component {
    render(){
        let { productid } = this.props;
        console.log(productid);
        return(
            <div className={productid=='1'?'menu-list-next':'menu-list-frist'}>
                <span className='menu-list-title'>醇类</span>
                <ul className='item-list-dd-type'>
                            <li className='item-list-li-type'>乙醇</li>
                            <li className='item-list-li-type'>甲缩醛</li>
                            <li className='item-list-li-type'>乌洛托品</li>
                            <li className='item-list-li-type'>多聚甲醛</li>
                            <li className='item-list-li-type'>MTBE</li>
                            <li className='item-list-li-type'> 二甲醚</li>
                            <li className='item-list-li-type'>乙醇</li>
                            <li className='item-list-li-type'>甲缩醛</li>
                            <li className='item-list-li-type'>乌洛托品</li>
                            <li className='item-list-li-type'>多聚甲醛</li>
                            <li className='item-list-li-type'>MTBE</li>
                            <li className='item-list-li-type'> 二甲醚</li>   
                            <li className='item-list-li-type'>甲缩醛</li>
                            <li className='item-list-li-type'>乌洛托品</li>
                            <li className='item-list-li-type'>多聚甲醛</li>
                            <li className='item-list-li-type'>MTBE</li>
                            <li className='item-list-li-type'> 二甲醚</li>  
                </ul>   
                <hr className='menu-hr' />
            </div>            
        );
    }
}



export default Catalogue;























