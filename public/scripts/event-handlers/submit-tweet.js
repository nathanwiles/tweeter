import { helpers } from "../helpers/index.js";

/**
 * @requires jQuery
 * 
 * @description #new-tweet-form submission handler.
 * 
 * @side_effect sends an ajax POST request to '/tweets'.
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
