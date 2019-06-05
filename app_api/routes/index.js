var express = require('express');
var router = express.Router();
var ctrlAgujeros = require('../controllers/ctrlAgujeros');
var ctrlExoplanetas=require('../controllers/ctrlExoplanetas');
var ctrlQuasars=require('../controllers/ctrlQuasars');

/* GET home page. */

//agujeros
router.get('/agujeroNegro', ctrlAgujeros.AgujeroGet);
router.post('/agujeroNegro',ctrlAgujeros.crearAgujeroNegro);
router.get('/agujeroNegro/:agujeroNegroId', ctrlAgujeros.AgujeroNegroGetOne);
router.put('/agujeroNegro/:agujeroNegroId', ctrlAgujeros.agujeroUpdateOne);
router.delete('/agujeroNegro/:agujeroNegroId', ctrlAgujeros.agujeroNegroBorrarOne);

//exoplanetas
router.get('/exoplaneta', ctrlExoplanetas.ExoplanetaGet);
router.post('/exoplaneta',ctrlExoplanetas.crearExoplaneta);
router.get('/exoplaneta/:exoplanetaId', ctrlExoplanetas.ExoplanetaGetOne);
router.put('/exoplaneta/:exoplanetaId', ctrlExoplanetas.ExoplanetaUpdateOne);
router.delete('/exoplaneta/:exoplanetaId', ctrlExoplanetas.ExoplanetaBorrarOne);

//Quasars
router.get('/Quasar', ctrlQuasars.QuasarGet);
router.post('/Quasar',ctrlQuasars.crearQuasar);
router.get('/Quasar/:QuasarId', ctrlQuasars.QuasarGetOne);
router.put('/Quasar/:QuasarId', ctrlQuasars.QuasarUpdateOne);
router.delete('/Quasar/:QuasarId', ctrlQuasars.QuasarBorrarOne);


module.exports = router;
