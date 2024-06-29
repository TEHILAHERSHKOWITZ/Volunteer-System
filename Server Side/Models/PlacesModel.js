const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema
    ({
        placeCode: Number,
        location: String
    },
        { collection: 'Place' })

const model = mongoose.model('Places', PlaceSchema);

module.exports = model;