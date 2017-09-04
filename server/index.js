/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const passport = require('passport');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/vicunia', {
  useMongoClient: true,
});

mongoose.connection.on('error', () => {
  console.log('There is an issue with your MongoDB connection.  Please make sure MongoDB is running.');
  process.exit(1);
});

require('./api/models/userModel');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.use('/api', require('./api'));
app.use(passport.initialize());
passport.use('local-login', require('./api/services/passportLoginLocal'));
passport.use('local-signup', require('./api/services/passportSignUpLocal'));

const authCheckMiddleware = require('./middlewares/authMiddleware');
app.use('/api', authCheckMiddleware);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
