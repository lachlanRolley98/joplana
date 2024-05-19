// define endpoints
const express = require('express');
const router = express.Router();
const { signup, signin, updateGoals, changeTriggers, addGoal, addHabitToGoal, deleteHabitFromGoal, deleteGoal   } = require('../controllers/authCon');
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/updateGoals', updateGoals);
router.post('/changeTriggers', changeTriggers);
router.post('/addGoal', addGoal);
router.post('/addHabitToGoal', addHabitToGoal);
router.post('/deleteHabitFromGoal', deleteHabitFromGoal);
router.post('/deleteGoal', deleteGoal);
module.exports = router;