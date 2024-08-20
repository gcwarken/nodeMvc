/*
* nodeMvc/controllersuserController.js
* @description :: controller for request related to user
*/

// for future validation with joi
// const userSchemaKey = require('../utils/validations/userValidation');
// const validation = require('../utils/validateRequest');

const getUser = async (req,res) => {
    res.success({ data : "This came from nodeMvc/controllersuserController.getUser" });
}

const postUser = async (req,res) => {
    res.success({ data : "This came from nodeMvc/controllersuserController.postUser" });
}

module.exports = {
    getUser,
    postUser,
}