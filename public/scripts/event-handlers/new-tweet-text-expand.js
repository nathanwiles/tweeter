/* global $ */

/**
 * @event_handler listens for input on the new tweet text area.
 * 
 * @responce expands or shrinks the new tweet text area to fit content. 
 * 
 */

export const newTweetTextExpand = () => {
  $("#new-tweet-text")
  .on("input", function() {
    this.style.removeProperty("height");
    this.style.height = this.scrollHeight + 2 + "px";
  })
  .on("focus", function() {
    this.style.removeProperty("height");
    this.style.height = this.scrollHeight + 2 + "px";
  })
  .on("blur", function() {
    if (this.value === "") {
      this.style.removeProperty("height");
      this.style.height = 0;
    }
  })
};