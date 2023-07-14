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

  return $tweet;
  };
  
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  created_at: 1461116232227
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like 
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.  
});