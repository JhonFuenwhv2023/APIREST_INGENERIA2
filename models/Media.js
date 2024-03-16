const { Schema, model} = require('mongoose'); 

const MediaSchema = Schema({
    Serial : {type: String, required: true, unique: true},
    Titulo: {type: String, required: true},
    Sinopsis: {type: String, required: true},
    Url: {type: String, required: true, unique: true},
    imagen: {type: Image, required: true},
    fechaCreacion: {type: Date, required: true},
    fechaActualizacion: {type: Date, required: true},
    AnoEstreno: {type: String, required: true},
    GeneroPrincipal: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: false
    },
    DirectorPrincipal: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    ProductoraPrincipal: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    TipoPrincipal: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }


});

module.exports = model('Media', MediaSchema);