/* global $ */

import { charCounter } from "./composer-char-counter.js";
import { returnToTop } from "./return-to-top.js";
import { submitTweet } from "./submit-tweet.js";
import { toggleNewTweet } from "./toggle-new-tweet.js";
/**
 * on document ready add event handlers to the DOM.
 *
 */

$(document).ready(function () {
  charCounter();
  returnToTop();
  submitTweet();
  toggleNewTweet();
});
