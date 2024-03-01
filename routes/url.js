const express = require('express');
const {handelgenerateNewShortURL} = require("../controllers/url")
const router = express.Router();

router.post("/",handelgenerateNewShortURL);
module.exports = router;