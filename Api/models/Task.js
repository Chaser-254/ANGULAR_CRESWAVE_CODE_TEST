
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
let TasksSchema = new Schema({
    task_name: {
        type: String,
        required: true
    },
    note: {
        type: String,
    },
    priority: {
        type: Number
    },
    date: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
    }
});

// Compile model from schema
module.exports = mongoose.model('Task', TasksSchema);
