/* global $ */

$(document).ready(function () {
  $("#new-tweet-text").on("input", function () {
    tweetLength = this.value.length;
    
    const counter = $(this).closest("form").find(".counter");
    console.log(counter);
    
    counter.text(140 - tweetLength);

    if (tweetLength > 140) {
      counter.addClass("red");
    } else {
      counter.removeClass("red");
    }
  });
});
