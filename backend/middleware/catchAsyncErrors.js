// This is catchAsyncErrors middleware to handle errors in async functions


module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};