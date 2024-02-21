// define endpoints
const express = require('express');
const router = express.Router();
const { signup, signin, updateGoals } = require('../controllers/auth');
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/updateGoals', updateGoals);
module.exports = router;