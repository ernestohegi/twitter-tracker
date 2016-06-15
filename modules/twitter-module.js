'use strict';

let twitterModule = (() => {
    'use strict';

    const Twitter = require('twitter');

    let twitter;

    let initialize = (
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret
    ) => {
        twitter = new Twitter({
            consumer_key,
            consumer_secret,
            access_token_key,
            access_token_secret
        });

        console.log('Twitter client initialized');
    };

    let isTwitterClientInitialized = (client) => (client === undefined) === false;

    let trackTweets = (track, callback) => {
        if (isTwitterClientInitialized(twitter) === false) {
            throw 'Twitter client not iniliazed';
            return false;
        } else if (track === undefined || track === '') {
            throw 'Nothing to track';
            return false;
        }

        console.log('Tracking tweets including ' + track);

        twitter.stream(
            'statuses/filter',
            {
                track
            },
            stream => {
                stream.on('data', tweet => {
                    if (callback === undefined) {
                        return tweet;
                    }

                    callback(tweet);
                });

                stream.on('error', error => {
                    throw error;
                });
            }
        );
    };

    return {
        initialize,
        trackTweets
    };
})();

exports.initialize = twitterModule.initialize;
exports.trackTweets = twitterModule.trackTweets;
exports.replyToTweet = twitterModule.replyToTweet;
