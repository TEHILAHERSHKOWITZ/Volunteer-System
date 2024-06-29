const mongoose = require('mongoose');

const ValuesOfPrioritysSchema = mongoose.Schema
    ({
        PriorityCode: Number,
        PriorityName: String
    },
        { collection: 'ValuesOfPriority' })

const model = mongoose.model('ValuesOfPrioritys', ValuesOfPrioritysSchema);

module.exports = model;