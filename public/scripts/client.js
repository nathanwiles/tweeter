import { helpers } from "./helpers/helpers-index.js";

/**
 * @file
 * @description renders tweets on page load, all other functionality is the result of event handlers and helpers.
 */


$(document).ready(function () {
  // load tweets on page load
  helpers.loadTweets();
});
