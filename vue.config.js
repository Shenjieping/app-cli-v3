/**
* @file vue.config.js
* @author shenjp@founder.com
* @date 2020-06-19 22:34:09
*/
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/adv-consumer': {
        target: 'http://gateway.xiangyuadv.dev1.fzyun.io/',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@http', resolve('src/http/index.js'));
    return config;
  },
};
