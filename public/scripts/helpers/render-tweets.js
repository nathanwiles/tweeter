 /**
   * @requires jQuery
   * @requires createTweetElement()
   * 
   * @description first performs and ajax request to get tweets from server. 
   * Then loops through tweets calling createTweetElement() for each tweet.
   * @side_effect appends each tweet to the #tweets-container.
   *
   * @returns {void}
   */

 const renderTweets = function () {
  $.ajax({
    url: "/tweets",
    method: "GET",
    dataType: "json",
  })
  .then((data) => {
    for (const tweet of data) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  })
  .error((err) => {
    console.log(err);
  });
};