/**
 * @function loadTweets
 * 
 * @description perorms an ajax request to get tweets from the server. if successful calls renderTweets() with the tweets.
 * 
 * @returns {array} tweets
 * 
 */

const loadTweets = function () {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
    success: (data) => {
      ;
      renderTweets(data);
    }

  })
};
