/*
 * nodeMvc/routes/userRouter.js
 * @description :: router to user related methods
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/:user_id').get(userController.getUser);
router.route('/').post(userController.postUser);

module.exports = router;