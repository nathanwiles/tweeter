/* global $ */

/**
 * @event_handler listens for input on the new tweet form.
 *
 * @response changes the text of the counter to the number of characters remaining.
 * @responce changes the color of the counter to red if the number of characters exceeds 140.
 * @responce clears error styling if the number of characters meet the requirements.
 *
 */
export const charCounter = () =>
  $("#new-tweet-text").on("input", function () {
    const tweetLength = this.value.length;
    const invalidTextAlert = $(this)
      .closest("form")
      .find("#invalid-text-alert");
    const newTweetText = $(this).closest("form").find("#new-tweet-text");
    const counter = $(this).closest("form").find(".counter");
    counter.text(140 - tweetLength);

    if (tweetLength > 140) {
      counter.addClass("red");
    } else if (tweetLength > 0) {
      counter.removeClass("red");
      newTweetText.removeClass("red-border-bottom");
      newTweetText.addClass("dark-border-bottom");
      invalidTextAlert.hide().slideUp().empty();
    }
  });

