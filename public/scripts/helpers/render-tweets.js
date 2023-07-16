/**
 * @requires jQuery
 * @requires createTweetElement()
 *
 * @param {array} tweets
 * @description Loops through tweets calling createTweetElement() for each tweet.
 * @side_effect appends each tweet to the #tweets-container.
 *
 * @returns {void}
 */

const renderTweets = function (data) {
  $("#tweets-container").empty();

  for (const tweet of data) {
    const $tweet = createTweetElement(tweet);
    $("#tweets-container").prepend($tweet);
  }
  
};
