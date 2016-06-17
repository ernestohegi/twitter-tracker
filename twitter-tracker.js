'use strict';

const twitterClient         = require('./modules/twitter-module.js'),
      twitterCredentials    = require('./data/twitter-configuration.js'),
      configuration         = require('./data/configuration.js'),
      argumentsParser       = require('./modules/arguments-parser-module.js'),
      consolePrinter        = require('./modules/console-printer-module.js'),
      io                    = require('socket.io')(configuration.socket.port);

const track = argumentsParser.getArgumentValue('track');

twitterClient.initialize(
    twitterCredentials.credentials.consumer_key,
    twitterCredentials.credentials.consumer_secret,
    twitterCredentials.credentials.access_token_key,
    twitterCredentials.credentials.access_token_secret
);

io.on('connection', client => {
    consolePrinter.printWithSeparatorAndSpaces('User connected');
    io.emit('tweet.track', track);
});

twitterClient.trackTweets(
    track,
    tweet => {
        consolePrinter.printWithSeparatorAndSpaces(tweet.id);
        io.emit('tweet', tweet);
    }
);
