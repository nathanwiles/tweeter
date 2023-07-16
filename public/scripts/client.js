/**
 * @file
 * @description contains the JS code for tweeter client. Author: Nathan Wiles.
 * @requires ./helpers/get-time-since.js must be included before this file in html.
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
    const timeSince = getTimeSince(tweet.created_at);
    const $tweet = $(`
      <article class="tweet">

        <header> 
          <span class="user-info">
            <img src='${tweet.user.avatars}' alt="${tweet.user.name}'s picture" ></img>
            <span class="user-name">${tweet.user.name}</span>
          </span> 
          <span class="user-handle">${tweet.user.handle}</span>
        </header>

        <div class="text">
          <p>${tweet.content.text}</p>
        </div>

        <nav class="footer">
          <div class="tweet-timestamp"> ${timeSince} </div>
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
   * @requires jQuery
   * @requires createTweetElement()
   * 
   * @description first performs and ajax request to get tweets from server. 
   * Then loops through tweets calling createTweetElement() for each tweet.
   * @side_effect appends each tweet to the #tweets-container.
   *
   * @returns {void}
   */

  const renderTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
    })
    .then((data) => {
      for (const tweet of data) {
        const $tweet = createTweetElement(tweet);
        $("#tweets-container").prepend($tweet);
      }
    })
    .error((err) => {
      console.log(err);
    });
  };


  renderTweets();
});
