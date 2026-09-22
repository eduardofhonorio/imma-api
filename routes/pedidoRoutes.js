const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/cliente/:clienteId', pedidoController.listarPorCliente);
router.post('/', pedidoController.criarPedido);

module.exports = router;