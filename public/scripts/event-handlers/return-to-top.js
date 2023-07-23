/* global $ */

/**
 * @event_handler listens for click on the return to top button.
 * 
 * @response scrolls to the top of the page.
 * @responce focuses the new tweet text area.
 */

export const returnToTop = () => {
  const $btn = $("#return-to-top");
  const $timeline = $(".timeline");
  const $window = $(window);
  const $newTweet = $(".new-tweet");

  /* mobile event */
  $window.scroll(function () {
    if ($window.scrollTop() > 100) {
      $btn.fadeIn();
    } else {
      $btn.fadeOut();
    }
  });

  $btn.click(function () {
    if ($window.width() < 1024) {
      $("body, html").animate({ scrollTop: 0 }, "slow");
      $newTweet.show().slideDown().closest($("textarea").focus());
    }
  });

  /* desktop event */
  $timeline.scroll(function () {
    if ($timeline.scrollTop() > 100) {
      $btn.fadeIn();
    } else {
      $btn.fadeOut();
    }
  });

  $btn.click(function () {
    if ($window.width() >= 1024) {
      $timeline.animate({ scrollTop: 0 }, "slow");
      $newTweet.show().slideDown().closest($("textarea").focus());
    }
  });
};

