/**
 * nodeMvc/utils/validations/userValidation.js
 * @description :: validation model for methods related to user
 */

const joi = require('joi');

const getUserValid = joi.object({
    id: joi.string().pattern(/^\d+$/).required(),
}).unknown(true);

const postUserValid = joi.object({
    id: joi.string().pattern(/^\d+$/).required(),
}).unknown(true);

exports.schemaKeys = {
    getUserValid,
    postUserValid,
};