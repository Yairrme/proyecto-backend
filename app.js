const espress = require('express');
 
const app = espress();

app	.get('/', (req, res) => {
   // res.send('Hola mundo desde Express!')
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000');
});