const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./public/index.js', './public/assets/script/messages-section.js']
    // dataGeo: './public/assets/script/data-geo.js',
    // mapDirection: './public/assets/script/map-direction.js',
    // mapApi: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxVb5T_vGLLm40KFtYQci6vTIaHZqp48Y&callback=initMap'
    // style: './public/assets/script/style.js',
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: [
      { directory: path.join(__dirname, 'public'), },
    ],
    compress: true,
    port: 9000,
  },
};