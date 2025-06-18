const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

// Rutas
router.get('/', alumnoController.getAlumnos);
router.post('/', alumnoController.createAlumno);

module.exports = router;


// Este archivo define las rutas para los alumnos
// y las vincula con los métodos del controlador correspondiente.