/**
   * @param {object} tweet
   *
   * @description creates an <article> element with the tweet data.
   *
   * @returns \<artictle class="tweet"\>
   */

export const createTweetElement = function (tweet) {
  // control for cross-site scripting
  const tweetText = $("<p>").text(tweet.content.text).html();
  
  const timeSince = timeago.format(tweet.created_at);
  const $tweet = $(`
    <article class="tweet">

      <header class="header"> 
        <span class="user-info">
          <img src='${tweet.user.avatars}' alt="${tweet.user.name}'s picture" ></img>
          <span class="user-name">${tweet.user.name}</span>
        </span> 
        <span class="user-handle">${tweet.user.handle}</span>
      </header>

      <div class="text">
        <p>${tweetText}</p>
      </div>

      <nav class="footer">
        <div class="tweet-timestamp"> ${timeSince} </div>
        <nav class="tweet-icons">
          <i class="fas fa-flag icon"></i>
          <i class="fas fa-retweet icon"></i>
          <i class="fas fa-heart icon"></i>
        </nav>
      </nav> 

    </article>
  `);
  return $tweet;
};