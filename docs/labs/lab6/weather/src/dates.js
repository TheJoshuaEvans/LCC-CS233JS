// Utility functions that manipulate JS dates

/**
 * Returns a JS date object based on a unix timestamp and the timezone offset
 *
 * @param {number} unixTimestamp Unix epoch timestamp in milliseconds
 * @param {number} timezoneOffset Timezone offset in seconds
 * @returns {Date} JS date object
 */
export function getDate(unixTimestamp, timezoneOffset) {
  return new Date((unixTimestamp - timezoneOffset) * 1000);
};

/**
 * Returns a string that represents the day of the week based on a JS date object
 *
 * @param {Date} date Date object to convert into a string
 * @returns
 */
export function getWeekday(date) {
  const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = date.getDay();
  return dayNames[weekday];
};

/**
 * Returns the month of the year based on a JS date object
 *
 * @param {Date} date Date object to get the month for
 * @returns
 */
export function getMonth(date) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = date.getMonth();
  return monthNames[month];
}
