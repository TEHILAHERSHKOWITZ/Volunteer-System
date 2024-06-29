const mongoose = require('mongoose');

const RequestForHelpsSchema = mongoose.Schema
    ({
        id: Number,
        Place: {
            placeCode: Number,
        },

        problem_Description: String,
        contact_phone_number: String,
        Status: {
            typeOfStatus: String
        },

        number_of_people_stuck: Number,
        ValuesOfPriority: {
            PriorityCode: Number,
        },
        Volunteers: {
            volunteersCode: Number
        }
    },
        { collection: 'RequestForHelp' })

const model = mongoose.model('RequestForHelps', RequestForHelpsSchema);

module.exports = model;