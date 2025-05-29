const express = require('express');
const router = express.Router();

// Ruta Home
router.get('/', (req, res) => {
    res.render('home', { title: 'Inicio' });
});

// Ruta Login
router.get('/login', (req, res) => {
    res.render('login', { title: 'Iniciar Sesión' });
});

// Ruta Listado de Personas
router.get('/listado-personas', (req, res) => {
    res.render('listado', { title: 'Listado de Personas' });
});

// Ruta Registro Carnet
router.get('/registro-carnet', (req, res) => {
    res.render('registro', { title: 'Registro de Carnet' });
});

// Ruta mensajes con if else(aprende xfa)
router.get('/mensaje', (req, res) => {
    const condicion = true;    if (condicion) {
        res.send('Mensaje 1');
    } else {
        res.send('Mensaje 2');
    }
});

module.exports = router;
