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
        <header class="tweet header"> 
          <span>${tweet.user.avatars}</span>
          <span>${tweet.user.name}</span> 
        </header>
        <div class="tweet body">
          <p>${tweet.content.text}</p>
        </div>
        <footer class="tweet footer>
          <span>${tweet.user.handle}</span>
          <span>${tweet.created_at}</span>
        </footer> 
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
