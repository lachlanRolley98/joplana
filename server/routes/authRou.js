// define endpoints
const express = require('express');
const router = express.Router();
const { signup, signin, updateGoals } = require('../controllers/authCon');
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/updateGoals', updateGoals);
module.exports = router;