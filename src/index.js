const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port',3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use(require('./routes/rutas'));

app.listen(3000);
console.log("Mi primer servidor");