/**
 * @param {string} date
 *
 * @description compares the date of creation with the current date,
 *
 * @returns {string} time since creation
 */

const getTimeSince = function (timestamp) {
  const now = Date.now();
  const timeSince = now - timestamp;
  if (timeSince <= 1000) {
    return "Just now";
  }
  const seconds = Math.floor(timeSince / 1000);
  if (seconds < 60 && seconds > 1) {
    return `${seconds} seconds ago`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days} days ago`;
  }
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks} weeks ago`;
  }
  const months = Math.floor(weeks / 4);
  if (months < 12) {
    return `${months} months ago`;
  }
  const years = Math.floor(weeks / 52);
  if (years === 1) {
    return `${years} year ago`;
  }
  if (years > 1) {
    return `${years} years ago`;
  }
};


