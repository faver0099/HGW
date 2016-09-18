var config = {
//  entry: './main.js',
// entry: './HGW0200_Productdetails.js',

 entry: {
  /*
  'main':'./main.js',     html中，
   'next':'./HGW0200_Productdetails.js'
  
  */  
   'main':'./main.js',
   'next':'./HGW0200_Productdetails.js',
   'commoditysearch':'./HGW0300_CommoditySearch.js',
   'shoppingcar':'./HGW0400_ShoppingModule.js',
   'shoppingretule':'./HGW0403_ShoppingRetule.js',
 },


  output: {
    path: './',
    // filename: 'index.js',
    filename: '[name].js',


  },

  devServer: {
    inline: true,
    port: 7777
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',

      query: {
        presets: ['es2015', 'react']
      }
    }, {
        test: /\.(scss|sass)?$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css?$/,
        loader: 'style!css'
      }, {
        test: /\.(jpg|png|gif|jpeg)?$/,
        loader: 'url?limit=20480&name=modules/images/[name].[hash:8].[ext]'
      }, {
        test: /\.(eot|woff(2)?|ttf|svg)?(@.+)*$/,
        loader: 'url?limit=20480&name=modules/other/[name].[hash:8].[ext]'
      }, {
        test: /\.(xls(x))|(doc)|(ppt)$/,
        loader: 'url?limit=1&name=modules/other/[name].[hash:8].[ext]'
      }]
  }

}

module.exports = config;