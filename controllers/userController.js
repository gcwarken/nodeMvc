/*
* nodeMvc/controllersuserController.js
* @description :: controller for request related to user
*/

// for future validation with joi
const userSchemaKey = require('../utils/validations/userValidation');
const validation = require('../utils/validateRequest');

const getUser = async (req,res) => {
    try {
        let params = { ...req.params || {} };
        let validateRequest = validation.validateParamsWithJoi(
            params,
            userSchemaKey.schemaKeys.getUserValid);
        
        if (!validateRequest.isValid) {
            return res.validationError({ message: validateRequest.message });
        } else {
            res.success({ data : `Requested id: ${params.user_id}` })
        }
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }}

const postUser = async (req,res) => {
    res.success({ data : "This came from nodeMvc/controllersuserController.postUser" });
}

module.exports = {
    getUser,
    postUser,
}