/**
 * nodeMvc/utils/response/index.js
 * @description :: response middleware index
 */

const handler = require('./responseHandler');
const statusCode = require('./responseCode');

const responseHandler = (req, res, next) => {
  res.success = (data = {}) => {
    res.status(statusCode.success).json(handler.success(data));
  };
  res.failure = (data = {}) => {
    res.status(statusCode.success).json(handler.failure(data));
  };
  res.noContent = (data = {}) => {
    res.status(statusCode.success).json(handler.noContent(data));
  };
  res.internalServerError = (data = {}) => {
    res.status(statusCode.internalServerError).json(handler.internalServerError(data));
  };
  res.badRequest = (data = {}) => {
    res.status(statusCode.badRequest).json(handler.badRequest(data));
  };
  res.recordNotFound = (data = {}) => {
    res.status(statusCode.success).json(handler.recordNotFound(data));
  };
  res.validationError = (data = {}) => {
    res.status(statusCode.validationError).json(handler.validationError(data));
  };
  res.unAuthorized = (data = {}) => {
    res.status(statusCode.unAuthorized).json(handler.unAuthorized(data));
  };
  next();
};

module.exports = responseHandler;