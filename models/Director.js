const { Schema, model} = require('mongoose'); 

const DirectorSchema = Schema({
    name : {type: String, required: true},
    status: {type: String, required: true, enum: ['Active', 'Inactive']},
    fechaCreacion: {type: Date, required: true},
    fechaActualizacion: {type: Date, required: true}

});

module.exports = model('Director', DirectorSchema);