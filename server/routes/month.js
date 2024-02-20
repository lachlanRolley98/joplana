// define endpoints
const express = require('express');
const router = express.Router();
const { submit } = require('../controllers/month');
router.post('/submit', submit);
module.exports = router;