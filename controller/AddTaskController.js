const mongoose = require('mongoose');
const Tasks = require('../models/tasks');
const add_tasks = async (req, res) => {
    const tasks = new Tasks({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        content: req.body.content,
        date: req.body.date
    });
    const save_task = await tasks.save();
    res.status(200).send(save_task);
}
const get_tasks = async (req, res) => {
    const task_list = await Tasks.find({});
    res.status(200).send(task_list);
}
module.exports = {
    add_tasks,
    get_tasks
}