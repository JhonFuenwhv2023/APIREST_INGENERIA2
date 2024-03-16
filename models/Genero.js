const mongoose = require('mongoose');

const generoSchema = mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String
    },
    fechaCreacion:{
        type: Date
    },
    fechaActualizacion:{
        type: Date
    },
    description:{
        type: String
    }});

    module.exports = mongoose.model('genero', generoSchema);