import React from 'react';

import Head from './src/HGW0001_Head.jsx';
import SearchBar from './src/HGW0002_SearchBar.jsx';
import Catalogue from "./src/HGW0003_catalogue.jsx"


import Details from "./src/HGW0200_Productdetails.jsx"



import FooterGuide from './src/HGW0006_FooterGuide.jsx';
import Footer from './src/HGW0007_Footer.jsx';




class Productdetails extends React.Component {
   render() {
      return (
        <div>
          <Head></Head>
          <SearchBar></SearchBar>
          
          <Details/>

          <FooterGuide/>
          <Footer/>

        </div>
      );
   }
}

export default Productdetails;