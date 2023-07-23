/* global $ */

/**
 * @event_handler listens for click on the new tweet button in the nav bar.
 *
 * @response toggles the new tweet form.
 * @responce focuses the new tweet text area.
 *
 */

export const toggleNewTweet = () => {
  $(".nav-new-tweet").on("click", function () {
    $(".new-tweet").slideToggle("fast");
    $("#new-tweet-text").focus();
  });
};
