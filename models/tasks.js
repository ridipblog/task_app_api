const mongoose = require("mongoose");
let taskSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        content: String,
        date: String,
    },
    { collection: "tasklist" }
);
module.exports = mongoose.model("tasklist", taskSchema);