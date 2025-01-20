const express = require("express");
const { handleMessage } = require("../controllers/cbcontroller");

const router = express.Router();

router.post("/message", handleMessage);

module.exports = router;
