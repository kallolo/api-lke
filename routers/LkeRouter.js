const express = require('express');
const app = express();
const { check } = require('express-validator'); //form validation
const LkeController = require('../controllers/LkeController');
const upload = require('../middleware/upload');

const inputValidation = [
    upload.Photos.array('fileBukti'),
    // check('idLokasi').isString().notEmpty(),
]; //validasi inputan sebelum masuk database

app.route('/:tahun').get(LkeController.formLke);
app.route('/').post(inputValidation, LkeController.postLke);

module.exports = app;
