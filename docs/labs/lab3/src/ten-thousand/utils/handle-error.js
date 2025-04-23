//? Joshua Evans - 2025-04-22
/**
 * Function take a method and an error callback, and runs the callback if the method throws an error. If
 * an error is thrown, `null` will be returned, otherwise the result of the method will be returned
 *
 * @param {function()} method The method to call
 * @param {function(string)} cb The callback to call if the method fails. The error message
 *  is passed to this callback
 */
const handleError = (method, cb) => {
  let result = null;
  try {
    result = method();
  } catch (e) {
    // Call the callback with the error message
    cb(e.message);
  }
  return result;
};

export default handleError;
