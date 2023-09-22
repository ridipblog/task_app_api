const TaskController = require('../controller/AddTaskController');
const router = require('express').Router();
router.post('/add_task', TaskController.add_tasks);
router.get('/get_task', TaskController.get_tasks);
module.exports = router;