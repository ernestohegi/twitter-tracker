var tweetElementCreator = (function () {
    'use strict';

    var AT_SYMBOL                       = '@',
        LINK_SELECTOR                   = 'a',
        SPAN_SELECTOR                   = 'span',
        LIST_SELECTOR                   = 'li',
        TWITTER_BASE_URL                = 'https://twitter.com/',
        STATUS_URL_TOKEN                = '/status/',
        BLANK_TARGET_PROPERTY_NAME      = '_blank',
        USER_ACCOUNT_LINK_CLASS_NAME    = 'user-account-link',
        TWEET_LINK_CLASS_NAME           = 'tweet-link',
        TWEET_TEXT_CLASS_NAME           = 'tweet-text',
        TWEET_CONTAINER_CLASS_NAME      = 'tweet-container',
        TWITTER_CONTAINER_SELECTOR      = '.twitter-container';

    var createHTMLElement = function (type) {
        return document.createElement(type);
    };

    var createLink = function (href, className, target, content) {
        var link = createHTMLElement(LINK_SELECTOR);

        link.href = href;
        link.className += ' ' + className;
        link.target = target;
        link.innerHTML = content;

        return link;
    };

    var createTweetLink = function (tweet) {
        return createLink(
            TWITTER_BASE_URL + tweet.user.screen_name + STATUS_URL_TOKEN + tweet.id_str,
            TWEET_LINK_CLASS_NAME,
            BLANK_TARGET_PROPERTY_NAME,
            tweet.id
        );
    };

    var createUserAccountLink = function (tweet) {
        return createLink(
            TWITTER_BASE_URL + tweet.user.screen_name,
            USER_ACCOUNT_LINK_CLASS_NAME,
            BLANK_TARGET_PROPERTY_NAME,
            AT_SYMBOL + tweet.user.screen_name
        );
    };

    var createTweetText = function (tweet) {
        var tweetText = createHTMLElement(SPAN_SELECTOR);

        tweetText.className = TWEET_TEXT_CLASS_NAME;
        tweetText.innerHTML = tweet.text;

        return tweetText;
    };

    var createTweetContainer = function () {
        var tweetContainer = createHTMLElement(LIST_SELECTOR);

        tweetContainer.className = TWEET_CONTAINER_CLASS_NAME;

        return tweetContainer;
    };

    var prependTweetIntoContainer = function (tweetContainer) {
        var container = document.querySelector(TWITTER_CONTAINER_SELECTOR);

        container.insertBefore(tweetContainer, container.firstChild);
    };

    return {
        createTweetElement: function (tweet) {
            if (tweet.user === undefined) {
                return false;
            }

            var tweetContainer = createTweetContainer();

            tweetContainer.appendChild(createTweetLink(tweet));
            tweetContainer.appendChild(createUserAccountLink(tweet));
            tweetContainer.appendChild(createTweetText(tweet));

            prependTweetIntoContainer(tweetContainer);
        }
    };
})();
