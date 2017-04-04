module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Monterail test project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Monterail test project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700Noto+Serif:400,400i,700,700i'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0266B3' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
