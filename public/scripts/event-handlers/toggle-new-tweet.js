/* global $ */

$(document).ready(function () {
  // Hide the new tweet form on page load.
  /**
   * @event_handler listens for click on the new tweet button in the nav bar.
   * 
   * @response toggles the new tweet form.
   * @responce focuses the new tweet text area.
   *
   */
  $(".nav-new-tweet").on("click", function () {
    $(".new-tweet").slideToggle('fast');
    $("#new-tweet-text").focus();
  });
});