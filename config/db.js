const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',            // ⚠️ Cambialo si usás otro usuario
  password: '',            // ⚠️ Agregá tu contraseña si tenés
  database: 'backend_proyecto'  // ⚠️ Asegurate de crear esta DB antes
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('✅ Conectado a MySQL');
  }
});

module.exports = connection;
