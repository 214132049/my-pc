// vue.config.js
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/', '/about', '/products', '/news', '/support', '/contact'],
        postProcess: function (context) {
          var titles = {
            '/': '首页',
            '/about': '关于我们',
            '/products': '产品中心',
            '/news': '近期活动',
            '/support': '技术支持',
            '/contact': '联系我们'
          }
          context.html = context.html.replace(
            /<title>[^<]*<\/title>/i,
            '<title>' + titles[context.route] + '</title>'
          )
          return context
        }
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
}
