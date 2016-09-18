import React from 'react';

import Head from './src/HGW0001_Head.jsx';
import SearchBar from './src/HGW0002_SearchBar.jsx';
import Catalogue from "./src/HGW0003_catalogue.jsx"



import FooterGuide from './src/HGW0006_FooterGuide.jsx';
import Footer from './src/HGW0007_Footer.jsx';




class CommoditySearch extends React.Component {
   render() {
      return (
        <div className="body">
          <Head></Head>
          <SearchBar></SearchBar>
          
        

          <FooterGuide/>
          <Footer/>

        </div>
      );
   }
}

export default CommoditySearch;