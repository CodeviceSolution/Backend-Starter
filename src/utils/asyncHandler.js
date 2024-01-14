// Middleware function to handle asynchronous request handlers
const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    // Execute the provided asynchronous request handler
    await requestHandler(req, res, next);
  } catch (error) {
    // If an error occurs during execution, handle and send a standardized error response
    res.status(err.code || 500).json({
      success: false,
      error: true,
      message: err.message,
      payload: null,
    });
  }
};

// Export the asyncHandler middleware for use in other parts of the application
export { asyncHandler };
