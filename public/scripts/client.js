/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const createTweetElement = function (tweet) {
    const $tweet = $(`<article class="tweet">
  <header class="tweet-header"> 
  <span>${tweet.user.avatars}</span>
  <span>${tweet.user.name}</span> 
  </header>
  <div class="tweet-body">
  <p>${tweet.content.text}</p>
  </div>
  <footer class="tweet-footer>
  <span>${tweet.user.handle}</span>
  <span>${tweet.created_at}</span>
  </footer> 
  </article>`);
  };

  return $tweet;
});
