'use strict';

const twitterClient         = require('./modules/twitter-module.js');
const twitterCredentials    = require('./data/twitter-configuration.js');
const argumentsParser       = require('./modules/arguments-parser-module.js');
const consolePrinter        = require('./modules/console-printer-module.js');

const track = argumentsParser.getArgumentValue('track');

twitterClient.initialize(
    twitterCredentials.credentials.consumer_key,
    twitterCredentials.credentials.consumer_secret,
    twitterCredentials.credentials.access_token_key,
    twitterCredentials.credentials.access_token_secret
);

twitterClient.trackTweets(
    track,
    tweet => {
        consolePrinter.printWithSeparatorAndSpaces([
            tweet.id,
            tweet.user.screen_name,
            tweet.user.location
        ]);

        consolePrinter.print(tweet.text);
    }
);
