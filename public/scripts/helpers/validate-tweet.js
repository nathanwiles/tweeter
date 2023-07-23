import { helpers } from "./helpers-index.js";
/**
 * @param {string} tweetText
 *
 * @description validates the tweet text and flags the error message if invalid.
 *
 * @returns {string} error message or true if valid.
 */

export const validateTweet = function (tweetText) {
  if (tweetText === "") {
    helpers.flagTweetError("Tweet cannot be empty!");
    return false;
  } else if (tweetText.length > 140) {
    helpers.flagTweetError("Your tweet is too long!");
    return false;
  }
  return true;
};