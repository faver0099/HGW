import React from 'react';

import Head from './src/HGW0001_Head.jsx';
import SearchBar from './src/HGW0002_SearchBar.jsx';
import Catalogue from "./src/HGW0003_catalogue.jsx"

import ShoppingModuleHead from "./src/HGW0400_ShoppingModuleHead.jsx"
import ShoppingRetule from "./src/HGW0403_ShoppingRetule.jsx"


import FooterGuide from './src/HGW0006_FooterGuide.jsx';
import Footer from './src/HGW0007_Footer.jsx';




class ShoppingModule extends React.Component {
   render() {
      return (
        <div className="body">
          <Head></Head>
          <SearchBar></SearchBar>
          
          <ShoppingModuleHead/>
          <ShoppingRetule/>
          



          <FooterGuide/>
          <Footer/>

        </div>
      );
   }
}

export default ShoppingModule;