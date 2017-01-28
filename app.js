'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 5000;

// **********************************************************
// DEV SERVER ONLY
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// **********************************************************
// CONFIG

// Routes
const routes = require('./server/routes');
app.use('/', routes);

// Static Files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// View Engine: Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + "/views");
// Port
app.set('port', port);

// **********************************************************
// LISTEN
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
