import { helpers } from "./index.js";

/**
 * @requires jQuery
 * @requires ./helpers/create-tweet-element
 *
 * @param {array} tweets
 * @description Loops through tweets calling createTweetElement() for each tweet.
 * @side_effect appends each tweet to the #tweets-container.
 *
 * @returns {void}
 */


export const renderTweets = function (data) {
  $("#tweets-container").empty();

  for (const tweet of data) {
    const $tweet = helpers.createTweetElement(tweet);
    $("#tweets-container").prepend($tweet);
  }
  
};
