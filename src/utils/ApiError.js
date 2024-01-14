// Custom error class extending the built-in Error class
class ApiError extends Error {
  /**
   * Constructor for ApiError class.
   *
   * @param {number} statusCode - HTTP status code for the error.
   * @param {string} message - Error message (default: "Something went wrong").
   * @param {Array} errors - Array of error details (default: []).
   * @param {string} stack - Error stack trace (default: "").
   */
  constructor(
    statusCode = 500,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    // Call the constructor of the parent class (Error)
    super(message);

    // Set properties specific to ApiError
    this.statusCode = statusCode; // HTTP status code for the error
    this.success = false; // Indicate that the operation was not successful
    this.errors = errors; // Array of error details

    // Set the stack trace either from the provided stack or capture it
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class for use in other parts of the application
export { ApiError };
