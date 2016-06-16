'use strict';

var socket = io.connect('http://localhost:' + socketPort);

socket.on('tweet', function (tweet) {
    tweetElementCreator.createTweetElement(tweet);
});
