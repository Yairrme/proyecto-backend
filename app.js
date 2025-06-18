
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rutas
app.use('/alumnos', require('./routes/alumnoRoutes'));
app.use('/profesores', require('./routes/profesorRoutes'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
// Este es el archivo principal de la aplicación Express.
// Aquí se configuran las rutas y se inicia el servidor en el puerto 3000.