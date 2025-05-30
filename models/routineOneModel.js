const mongoose = require("mongoose");

const routineOneSchema = new mongoose.Schema({
    class: {
        type: String,
        default: 'Class One'
    },
    subject: {
        type: String,
        required: true,
        // enum: ['Math', 'English', 'Science', 'EVS', 'Bangla', 'Drawing']
    },
    teacher: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    section: {
        type: String,
        enum: ['A', 'B', 'C'],
        required: true
    },
    session: {
        type: String,
        enum: ['First Term', 'Mid Term', 'Second Term', 'Final Term'],
        required: true
    },
    version: {
        type: String,
        enum: ['English', 'Bangla'],
        required: true
    },
}, { timestamps: true });

const RoutineOne = mongoose.model('RoutineOne', routineOneSchema);

module.exports = RoutineOne;