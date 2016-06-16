var socketUrl = 'http://localhost:' + socketPort,
    socket = io.connect(socketUrl);

socket.on('tweet', function (tweet) {
    var linkSelector = 'a',
        container = document.querySelector('.twitter-container'),
        tweetContainer = document.createElement('div'),
        tweetText = document.createElement('span'),
        tweetLink = document.createElement(linkSelector),
        userAccountLink = document.createElement(linkSelector),
        userAccountURL = 'https://twitter.com/' + tweet.user.screen_name;

    // @TODO Modularize this script.
    tweetContainer.className = 'tweet-container';
    tweetText.className = 'tweet-text';
    tweetLink.className = 'tweet-link';
    userAccountLink.className = 'user-account-link';

    tweetLink.href = userAccountURL + '/status/' + tweet.id_str;
    tweetLink.target = '_blank';
    tweetLink.innerHTML = tweet.id;

    userAccountLink.href = userAccountURL;
    userAccountLink.target = '_blank';
    userAccountLink.innerHTML = '@' + tweet.user.screen_name;

    tweetText.innerHTML = tweet.text;

    tweetContainer.appendChild(tweetLink);
    tweetContainer.appendChild(userAccountLink);
    tweetContainer.appendChild(tweetText);

    container.insertBefore(tweetContainer, container.firstChild);
});
