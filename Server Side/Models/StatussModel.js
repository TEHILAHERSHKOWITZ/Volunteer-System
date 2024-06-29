const mongoose = require('mongoose');

const StatussSchema = mongoose.Schema
    ({
        typeOfStatus: String
    },
        { collection: 'Status' })

const model = mongoose.model('Status', StatussSchema);

module.exports = model;