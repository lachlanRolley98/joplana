// define endpoints
const express = require('express');
const router = express.Router();
const { submit, getMonth } = require('../controllers/monthCon');
router.post('/submit', submit);
router.get('/getMonth', getMonth);
module.exports = router;