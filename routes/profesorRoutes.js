const express = require('express');
const router = express.Router();
const controller = require('../controllers/profesorController');

router.get('/', controller.getProfesores);
router.post('/', controller.createProfesor);

module.exports = router;
// Este archivo define las rutas para los profesores
// y las vincula con los métodos del controlador correspondiente.
