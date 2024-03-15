const mongoose = require('mongoose');

const generoSchema = mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String
    },
    date_create:{
        type: Date
    },
    date_update:{
        type: Date
    },
    description:{
        type: String
    }});

    module.exports = mongoose.model('genero', generoSchema);