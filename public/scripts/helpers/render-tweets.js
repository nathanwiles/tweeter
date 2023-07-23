/* globals $ */

import { helpers } from "./helpers-index.js";

/**
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
