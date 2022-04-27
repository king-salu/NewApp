const mongoose = require('mongoose');

const library_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name can't be empty"]
    },
    type: {
        type: String,
        required: [true,"library must have a type"]
    },
    id: {
        type: String,
        required: [true,"id must be made available"],
        unique: true
    },
    images: {
        type: Object
    }
});


exports.library_model = mongoose.model('library',library_schema);
