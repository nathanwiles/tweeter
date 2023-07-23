/* global $ */
import { helpers } from "../helpers/helpers-index.js";

/**
 * @requires jQuery
 *
 * @eventHandler on #new-tweet-form submission. checks if the tweet is valid.
 *
 * @valid_tweet
 * @side_effect sends an ajax POST request to '/tweets'.
 * @side_effect clears the #new-tweet-text textarea.
 *
 */

const submitTweet = () =>
  $("#new-tweet-form").on("submit", function (event) {
    event.preventDefault();
    const tweetText = $("#new-tweet-text").val();
    if (helpers.validateTweet(tweetText)) {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize(),
        success: () => {
          $("#new-tweet-text").val("");
          $("#new-tweet-form output.counter").text("140");
          helpers.loadTweets();
        },
      });
    }
  });
export { submitTweet };
