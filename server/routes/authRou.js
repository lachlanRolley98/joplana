// define endpoints
const express = require('express');
const router = express.Router();
const { signup, signin, updateGoals, changeTriggers, addGoal } = require('../controllers/authCon');
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/updateGoals', updateGoals);
router.post('/changeTriggers', changeTriggers);
router.post('/addGoal', addGoal);
module.exports = router;