(function () {
    'use strict';

    var socket = io.connect('http://localhost:' + socketPort);

    socket.on('tweet.track', function (tracking) {
        interfaceController.updateTrackingValue(tracking);
    });

    socket.on('tweet', function (tweet) {
        tweetElementCreator.createTweetElement(tweet);
    });
})();
