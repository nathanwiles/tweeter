/**
 * @description helper function to flag an error in Tweet submission.
 *
 * @param {string} message
 *
 * @on_error append error message to #invalid-text-alert
 * @on_error change bottom border of #tweet-text box to red.
 *
 * @note clearing the error styling is handled in composer-char-counter.js.
 *
 * @returns {void}
 * */

export const flagTweetError = (message) => {
  const $newTweetText = $("#new-tweet-text");
  const $invalidTextAlert = $("#invalid-text-alert");

  $invalidTextAlert.empty().append(
    `<i class='fas fa-exclamation-triangle'></i><span>${message}</span>`
  );

  $invalidTextAlert.slideDown('slow');

  // change bottom border of tweet-text box to red.
  $newTweetText.removeClass("dark-border-bottom");
  $newTweetText.addClass("red-border-bottom");
};