// compile helper functions
import {createTweetElement} from './create-tweet-element.js';
import {renderTweets} from './render-tweets.js';
import {loadTweets} from './load-tweets.js';
import { flagTweetError } from './flag-tweet-error.js';
import { validateTweet } from './validate-tweet.js';

//export helper functions as an object
export const helpers = {
  validateTweet,
  flagTweetError,
  loadTweets,
  renderTweets,
  createTweetElement,
}

