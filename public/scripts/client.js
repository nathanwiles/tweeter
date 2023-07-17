import { helpers } from "./helpers/index.js";

/**
 * @file
 * @description renders tweets on page load, all other functionality is the result of event handlers and helpers. Author: Nathan Wiles.
 *
 */


$(document).ready(function () {
  // load tweets on page load
  helpers.loadTweets();
});
