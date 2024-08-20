/*
 * back/routes/index.js
 * @description :: routes index
 */

const express = require('express');
const router = express.Router();

// home
router.get("/", (req, res) => {
    res.send("This came from /back/routes/index.js");
});

router.use("/user", require("./userRouter"));

module.exports = router;