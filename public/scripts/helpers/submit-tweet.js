/**
 * @param {string} tweetText
 * @description validates the tweet text and returns an error message if invalid.
 * @returns {string} error message or true if valid.
 */

const validateTweet = function (tweetText) {
  if (tweetText === "") {
    alert("Tweet cannot be empty!");
    return false;
  }
  if (tweetText.length > 140) {
    alert("Tweet must be less than 140 characters!");
    return false;
  }
  return true;
};

/**
 * @requires jQuery
 * @requires validateTweet()
 * @description handles the form submission for the new tweet form.
 * @side_effect sends an ajax request to the server to post the new tweet.
 * @returns {void}
 */

$(document).ready(function () {
  $("#new-tweet-form").on("submit", function (event) {
    event.preventDefault();
    const tweetText = $("#new-tweet-text").val();
    if (validateTweet(tweetText)) {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize(),
        success: () => {
          $("#new-tweet-text").val("");
          $("#new-tweet-form output.counter").text("140");
          loadTweets();
        }
      });
    }
  });
});
