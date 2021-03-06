import React from 'react';

import Head from './src/HGW0001_Head.jsx';
import SearchBar from './src/HGW0002_SearchBar.jsx';
import Catalogue from "./src/HGW0003_catalogue.jsx"


import Search from "./src/HGW0300_CommoditySearch.jsx"


import FooterGuide from './src/HGW0006_FooterGuide.jsx';
import Footer from './src/HGW0007_Footer.jsx';




class CommoditySearch extends React.Component {
   render() {
      return (
        <div>
          <Head></Head>
          <SearchBar></SearchBar>
          
          <Search/>

          <FooterGuide/>
          <Footer/>

        </div>
      );
   }
}

export default CommoditySearch;