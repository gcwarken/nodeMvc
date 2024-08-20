/**
 * nodeMvc/utils/validateRequest.js
  * @description :: method exports for parameter validation with joi module.
 */

const joi = require('joi');

exports.validateParamsWithJoi = (payload, schemaKeys) => {
    const { error } = schemaKeys.validate(payload, {
      abortEarly: false,
      convert: false,
    });
    if (error) {
      const message = error.details.map((el) => el.message).join('\n');
      return {
        isValid: false,
        message,
      };
    }
    return { isValid: true };
};