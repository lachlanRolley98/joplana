// define endpoints
const express = require('express');
const router = express.Router();
const { submit, getMonth, submitDream } = require('../controllers/monthCon');
router.post('/submit', submit);
router.post('/submitDream', submitDream);
router.get('/getMonth', getMonth);
module.exports = router;