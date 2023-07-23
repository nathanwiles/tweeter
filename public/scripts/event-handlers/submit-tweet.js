import { helpers } from "../helpers/helpers-index.js";

/**
 * @requires jQuery
 * 
 * @description #new-tweet-form submission handler. checks if the tweet is valid.
 * 
 * @valid_tweet 
 * @side_effect sends an ajax POST request to '/tweets'.
 * @side_effect clears the #new-tweet-text textarea.
 * 
 * @invalid_tweet
 * @side_effect validate tweet will render an error message.
 * @returns {void}
 */

$(document).ready(function () {

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
});
