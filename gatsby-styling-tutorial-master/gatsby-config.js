Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @Odhora410 Sign out
1
0 1 jdebettencourt/gatsby-starter-weather
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
gatsby-starter-weather/gatsby-config.js
@jdebettencourt jdebettencourt first try g-starter-weath
184f34d  16 days ago
28 lines (26 sloc)  598 Bytes
    
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '<abcdefghijklmnopqrstuvwxyzabcdef>',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '<abcdefghijklmnopqrstuvwxyzabcdef>',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    } 
    
  ]
}
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
