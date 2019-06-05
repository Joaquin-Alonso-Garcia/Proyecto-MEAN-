var express = require('express');
var router = express.Router();
var ctrlBienvenida = require('../controllers/ctrlBienvenida');
var ctrlAgujerosNegros = require('../controllers/ctrlAgujerosNegros');
var ctrlQuasars = require('../controllers/CtrlQuasars');
var ctrlExoplanetas = require('../controllers/CtrlExoplanetas');
var ctrlContacto = require('../controllers/ctrlContacto')

/* GET index page. */
router.get('/', ctrlBienvenida.index);
router.get('/agujerosNegros', ctrlAgujerosNegros.agujerosNegros);
router.get('/quasars', ctrlQuasars.quasars);
router.get('/exoPlanetas', ctrlExoplanetas.exoPlanetas);
router.get('/contacto', ctrlContacto.contacto);

module.exports = router;