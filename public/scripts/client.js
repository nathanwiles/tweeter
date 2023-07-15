/**
 * @file
 * @description contains the JS code for tweeter client. Author: Nathan Wiles.
 *
 */

$(document).ready(function () {
  /**
   * @param {object} tweet
   *
   * @description creates an <article> element with the tweet data.
   *
   * @returns \<artictle class="tweet"\>
   */

  const createTweetElement = function (tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header> 
          <span class="user-info">
          <img src='${tweet.user.avatars}'></img>
          <span class="user-name">${tweet.user.name}</span>
          </span> 
          <span class="user-handle">${tweet.user.handle}</span>
        </header>
        <div class="text">
          <p>${tweet.content.text}</p>
        </div>
        <nav class="footer">
          <div class="tweet-timestamp"> ${tweet.created_at} </div>
          <nav class="tweet-icons">
            <i class="fas fa-flag icon"></i>
            <i class="fas fa-retweet icon"></i>
            <i class="fas fa-heart icon"></i>
          </nav>
        </nav> 
      </article>
    `);

    return $tweet;
  };

  /**
   * @param {array} tweets
   * @description loops through tweets calls createTweetElement for each tweet.
   * @side_effect appends each tweet to the #tweets-container.
   * @returns {void}
   */

  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").append($tweet);
    }
  };

  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];
  renderTweets(data);
});
