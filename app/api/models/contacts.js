const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    userId: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: false
    },
    mobilePhone: {
        type: String,
        trim: true,
        required: false
    },
    homePhone: {
        type: String,
        trim: true,
        required: false
    },
    obs: {
        type: String,
        trim: true,
        required: false
    }
});

module.exports = mongoose.model('Contact', ContactSchema);