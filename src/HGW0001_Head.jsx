import React, {Component} from 'react';
import './HGW0001_Head.less';

class Head extends Component {
    render () {
        return (
         

        <div className="htmlheaddiv">
            <a href=""><span className="leftspan">登录</span></a>
            <span className="underline">|</span>
            <a href=""><span>免费注册</span></a>

            <span className="rightspan">
                <a href=""><span>供应商入驻</span></a>
                <span className="underline" >|</span>
                <a href=""><span>个人中心</span></a>
                <span className="underline" >|</span>
                <img className="headimg" src="./pg0001_img/未标题-1_03.png"></img>
                <span>0755-0232123</span>
            </span>
        </div>
        )
    }
}

export default Head;
