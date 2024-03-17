const { Router } = require('express');
const Media = require('../models/Media');
const {validationResult, check } = require('express-validator');

const router = Router();

    //  Crear Media
router.post('/', [
    check('serial', 'serial requerido').not().isEmpty(),
    check('titulo', 'El titulo es requerido').not().isEmpty(),
    check('sinopsis', 'El sinopsis es requerido').not().isEmpty(),
    check('url', 'El url es requerido').not().isEmpty(),
    check('imagen', 'imagen es requerido').not().isEmpty(),
    check('anoExtreno', 'El año de esxtreno').not().isEmpty(),

    check('generoPrincipal', 'generoPrincipal es requerido').not().isEmpty(),
    check('tipoPrincipal', 'tipoPrincipal es requerido').not().isEmpty(),
    check('directorPrincipal', 'directorPrincipal es requerido').not().isEmpty(),
    check('productoraPrincipal', 'productoraPrincipal es requerido').not().isEmpty()

],  async function (req, res) {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ mensaje: errors.array()});
        }

    const existeMedia = await Media.findOne ({serial : req.body.serial})

    if (existeMedia) {
        return res.status(400).json({ 
            mensaje: 'Ya existe una Media con ese nombre'});
    }

    let media = new Media();
    media.serial = req.body.serial;
    media.titulo = req.body.titulo;
    media.sinopsis = req.body.sinopsis;
    media.url = req.body.url;
    media.imagen = req.body.imagen;
    media.fechaCreacion = new Date;
    media.fechaActualizacion = new Date;
    media.anoEstreno = req.body.anoEstreno;
    media.generoPrincipal = req.body.generoPrincipal;
    media.tipoPrincipal = req.body.tipoPrincipal;
    media.directorPrincipal = req.body.directorPrincipal;
    media.productoraPrincipal = req.body.productoraPrincipal;
    media.descripcion = req.body.descripcion;


    media = await media.save(); // insert  into media

    res.send(media);
    console.log(media);

    }catch (error) {
        console.log(error);
    }

});

// listar media
router.get('/', async function(req, res){

    try {

        const media = await Media.find(); // get media
        res.send(media);


    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "ocurrio un error al crear un media"});
    }
    
});

// Actualizar media
router.put('/:mediaId',[
    check('serial', 'serial requerido').not().isEmpty(),
    check('titulo', 'El titulo es requerido').not().isEmpty(),
    check('sinopsis', 'El sinopsis es requerido').not().isEmpty(),
    check('url', 'El url es requerido').not().isEmpty(),
    check('imagen', 'imagen es requerido').not().isEmpty(),
    check('anoExtreno', 'El año de esxtreno').not().isEmpty(),

    check('generoPrincipal', 'generoPrincipal es requeridoch').not().isEmpty(),
    check('tipoPrincipal', 'tipoPrincipal es requeridoch').not().isEmpty(),
    check('directorPrincipal', 'directorPrincipal es requeridoch').not().isEmpty(),
    check('productoraPrincipal', 'productoraPrincipal es requeridoch').not().isEmpty()
],  async function (req, res) {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ mensaje: errors.array()});
        }

        let media = await Media.findById(req.params.mediaId);
        if(!media) {
            return res.status(404).json({
                mensaje: "No se encontró el media."});
        }

    const existeMedia = await Media.findOne ({name : req.body.name, _id: { $ne: media._id} });

    if (existeMedia) {
        return res.status(400).json({ 
            mensaje: 'Ya existe una media con ese nombre'});
    }

    
    media.serial = req.body.serial;
    media.titulo = req.body.titulo;
    media.sinopsis = req.body.sinopsis;
    media.url = req.body.url;
    media.imagen = req.body.imagen;
    media.fechaCreacion = new Date;
    media.fechaActualizacion = new Date;
    media.anoEstreno = req.body.anoEstreno;
    media.generoPrincipal = req.body.generoPrincipal;
    media.tipoPrincipal = req.body.tipoPrincipal;
    media.directorPrincipal = req.body.directorPrincipal;
    media.productoraPrincipal = req.body.productoraPrincipal;
    media.descripcion = req.body.descripcion;

    media = await media.save(); // insert  into media

    res.send(media);
    console.log(media);

    }catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "ocurrio un error al actualizar la media"});
    }

});

// Eliminar media

router.delete('/:mediaId', async function(req, res){

    try {

        let media = await Genero.findById(req.params.mediaId);
        if(!media) {
            return res.status(404).json({
                mensaje: "No se encontró el media."});
        }

        media = await Media.findByIdAndDelete(req.params.mediaId);

        res.send(media);
        console.log(media);

    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "ocurrio un error al eliminar la Media."});
    }

});



module.exports = router;