/**
   * @param {object} tweet
   *
   * @description creates an <article> element with the tweet data.
   *
   * @returns \<artictle class="tweet"\>
   */

const createTweetElement = function (tweet) {
  const timeSince = getTimeSince(tweet.created_at);
  const $tweet = $(`
    <article class="tweet">

      <header> 
        <span class="user-info">
          <img src='${tweet.user.avatars}' alt="${tweet.user.name}'s picture" ></img>
          <span class="user-name">${tweet.user.name}</span>
        </span> 
        <span class="user-handle">${tweet.user.handle}</span>
      </header>

      <div class="text">
        <p>${tweet.content.text}</p>
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