import React, {Component} from 'react'
import './HGW0006_FooterGuide.less';

 class FooterGuideContent extends Component {
     render(){
         return(
             <div className='footer-content'>
                <div className='footer-content-1'>
                    <dl>
                        <dd className='footer-content-dd-1'>新手指南</dd>
                        <dd className='footer-content-dd-2'>如何购买商品</dd>
                        <dd className='footer-content-dd-2'>如何添加仓库</dd>
                        <dd className='footer-content-dd-2'>如何找回密码</dd>
                        <dd className='footer-content-dd-2'>如何注册会员</dd>
                    </dl>
                </div>
                <div className='footer-content-2'>
                    <dl>
                        <dd className='footer-content-dd-1'>关于我们</dd>
                        <dd className='footer-content-dd-2'>公司简介</dd>
                        <dd className='footer-content-dd-2'>联系我们</dd>
                    </dl>
                </div>
                <div className='footer-content-2'>
                    <dl>
                        <dd className='footer-content-dd-1'>网站条款</dd>
                        <dd className='footer-content-dd-2'>如何购买商品</dd>
                        <dd className='footer-content-dd-2'>如何添加仓库</dd>
                    </dl>
                </div>
                <div className='footer-content-2'>
                    <dl >
                        <dd className='footer-content-dd-1'>售后</dd>
                        <dd className='footer-content-dd-2'>售后服务政策</dd>
                        <dd className='footer-content-dd-2'>退货货服务流程</dd>
                        <dd className='footer-content-dd-2'>优质售后服务</dd>
                        <dd className='footer-content-dd-2'>服务时效承诺</dd>
                    </dl>
                </div>
             </div>
         );
     }
 }

 class FooterGuideExpand extends Component {
     render(){
         return(
             <div  className='footer-expand'>
                <div className='footer-expand-wx'>
                    <img className='footer-expand-img' src='./source/qcode_15.png'/>
                    <dl>
                        <dd className='footer-content-dd-1'> 官方微信</dd>
                        <dd className='footer-content-dd-2'> 扫码二维码，即刻亲密互动，还有劲爆优惠等你来拿！</dd>
                    </dl>
                </div>
                <div className='footer-expand-ph'>
                     <img className='footer-expand-img' src='./source/1_18.png'/>
                     <dl>
                         <dd className='footer-content-dd-1'>服务热线</dd>
                         <dd className='footer-content-dd-3'> 400-10000-888888</dd>
                     </dl>
                </div>

             </div>
         );
     }
 }




class FooterGuide extends Component {
    render () {
        return (
            <div className='footer-guide'>
                <FooterGuideContent/>
                <FooterGuideExpand/>
            </div>
        )
    }
}

export default FooterGuide