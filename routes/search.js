const express = require("express");
const router = express.Router();
const { getPlayer } = require("../controller/search");

router.get("/:id", getPlayer);

module.exports = router;
