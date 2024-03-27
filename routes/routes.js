const { Router } = require('express');
const { getHome, coberturasDisponibles } = require('../controllers/rutas');

const router = Router();

router.get('/', getHome)

router.get('/coberturas', coberturasDisponibles); 

module.exports = router;