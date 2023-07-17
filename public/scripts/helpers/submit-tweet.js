/**
 * @description helper function to flag error
 *
 * @param {string} message
 *
 * @side_effect append error message to #invalid-text-alert
 * @side_effect change bottom border of tweet-text box to red.
 *
 * @note clearing the error styling is handled in composer-char-counter.js.
 *
 * @returns {void}
 * */

const flag = (message) => {
  const $newTweetText = $("#new-tweet-text");
  const $invalidTextAlert = $("#invalid-text-alert");
  // append error message to #invalid-text-alert
  $invalidTextAlert.empty().append(
    `<i class='fas fa-exclamation-triangle'></i><span>${message}</span>`
  );

  $invalidTextAlert.show().slideDown();

  $newTweetText.removeClass("dark-border-bottom");
  $newTweetText.addClass("red-border-bottom");
};

/**
 * @param {string} tweetText
 *
 * @description validates the tweet text and returns an error message if invalid.
 *
 * @returns {string} error message or true if valid.
 */

const validateTweet = function (tweetText) {
  if (tweetText === "") {
    flag("Tweet cannot be empty!");
    return false;
  }
  if (tweetText.length > 140) {
    flag("Your tweet is too long!");
    return false;
  }
  return true;
};

/**
 * @requires jQuery
 * @requires validateTweet()
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
    if (validateTweet(tweetText)) {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize(),
        success: () => {
          $("#new-tweet-text").val("");
          $("#new-tweet-form output.counter").text("140");
          loadTweets();
        },
      });
    }
  });
});
