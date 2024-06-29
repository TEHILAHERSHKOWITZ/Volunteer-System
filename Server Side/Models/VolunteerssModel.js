const mongoose = require('mongoose');

const VolunteersSchema = mongoose.Schema
    ({
        volunteersCode: Number,
        firstName: String,
        lastName: String,
        phoneNumber: String,

    },
        { collection: 'Volunteers' })

const model = mongoose.model('Volunteers', VolunteersSchema);

module.exports = model;