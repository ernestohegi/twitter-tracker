var socket = io.connect('http://localhost:8080');

socket.on('tweet', function (tweet) {
    var container = document.querySelector('.twitter-container'),
        tweetContainer = document.createElement('div');

    tweetContainer.className = 'tweet-container';
    tweetContainer.innerHTML = tweet.id + ' ' + tweet.user.screen_name + ' ' + tweet.text;

    container.insertBefore(tweetContainer, container.firstChild);
});
