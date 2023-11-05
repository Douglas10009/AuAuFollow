// --
// Esse arquivo serve para controlar as rotas
// -- 

const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/clientes', tasksController.getAll); //Read
router.post('/clientes', tasksMiddleware.validateFieldNome, tasksMiddleware.validateFieldEmail, tasksMiddleware.validateFieldSenha ,tasksController.createCliente); //Create
router.delete('/clientes/:id', tasksController.deleteCliente); // Delete 
router.put('/clientes/:id', tasksMiddleware.validateFieldNome, tasksMiddleware.validateFieldEmail, tasksMiddleware.validateFieldSenha , tasksController.updateCliente); // Update



module.exports = router;

