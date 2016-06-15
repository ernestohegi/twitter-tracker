'use strict';

let twitterModule = (() => {
    'use strict';

    const Twitter = require('twitter');

    let twitter;

    const separator = '------';
    const addSpace = () => console.log('');

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

    let replyToTweet = (tweet, message) => {
        if (isTwitterClientInitialized(twitter) === false) {
            throw 'Twitter client not iniliazed';
            return false;
        } else if (tweet === undefined || message === '') {
            throw 'Nothing to reply';
            return false;
        }

        twitter.post(
            'statuses/update',
            {
                in_reply_to_status_id: tweet.id,
                status: message
            },
            (error, tweet, response) => {
                if (!error) {
                    console.log(tweet.id);
                } else {
                    console.log(error);
                }
            }
        );
    };

    let trackTweets = (track) => {
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
                    console.log(separator);
                    addSpace();
                    console.log(tweet.id, tweet.user.location);
                    addSpace();
                    console.log(tweet.text);
                    addSpace();
                    addSpace();
                });

                stream.on('error', error => {
                    console.log(error);
                });
            }
        );
    };

    return {
        initialize,
        trackTweets,
        replyToTweet
    };
})();

exports.initialize = twitterModule.initialize;
exports.trackTweets = twitterModule.trackTweets;
exports.replyToTweet = twitterModule.replyToTweet;
