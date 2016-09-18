import React, {Component} from 'react'
import './HGW0005_IndustryNews.less';


class IndustryUnit extends Component{
    render(){
        return(
            <div className='industry-content-unit'>
                <img className='industry-unit-img' src='./source/news_11.png'/> 
                <span className='industry-unit-title'>对创业公司来说,“快”到底是什么？</span>
                <span className='industry-unit-describe'>2008年，苹果的运营部门扶着人SabihKhan和Tim Cook(时任苹果COO)开会讨论中国的生产大混nan</span>
            </div>
        );
    }
}


class IndustryContent extends Component{
    render(){
        return(
            <div className='industry-content'>
                <IndustryUnit/>
                <IndustryUnit/>
                <IndustryUnit/>
            </div>
        );
    }
}


class NewsContent extends Component{
    render(){
        return(
            <div className='right-news-content'>
                <ul >
                    <li>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                    <li className='right-news-unit'>对创业公司来说,“快到底是什么”?     07-11</li>
                </ul>

            </div>
        );
    }
}



class IndustryNews extends Component {
    render () {
        return (
            <div className='news-background'>
                <div className='news-head'>
                    <span className='news-head-title'>| 行业资讯</span>
                    <span className='news-head-more'>+更多</span>
                </div>
                <div className='news-content'>

                    <IndustryContent/>
                    <NewsContent/>
                </div>
            </div>
        )
    }
}

export default IndustryNews