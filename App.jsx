import React from 'react';

import Head from './src/HGW0001_Head.jsx';
import SearchBar from './src/HGW0002_SearchBar.jsx';
import Catalogue from "./src/HGW0003_catalogue.jsx"
import GoodView from './src/HGW0004_GoodList.jsx';
import IndustryNews from './src/HGW0005_IndustryNews.jsx';
import FooterGuide from './src/HGW0006_FooterGuide.jsx';
import Footer from './src/HGW0007_Footer.jsx';

class App extends React.Component {
   render() {
      return (
        <div className="body">
          <Head></Head>
          <SearchBar></SearchBar>
          <Catalogue></Catalogue>
          <GoodView></GoodView>
          <IndustryNews></IndustryNews>
          <FooterGuide/>
          <Footer/>

         

	      </div>
      );
   }
}

export default App;