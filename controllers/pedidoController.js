const PedidoModel = require('../models/pedidoModel');

exports.listarPorCliente = async (req, res) => {
    const { clienteId } = req.params;
    try {
        const pedidos = await PedidoModel.buscarPorCliente(clienteId);
        res.status(200).json(pedidos);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar pedidos do cliente.' });
    }
};

exports.criarPedido = async (req, res) => {
    try {
        const novoPedido = await PedidoModel.criar(req.body);
        res.status(201).json(novoPedido);
    } catch (erro) {
        res.status(400).json({ erro: 'Erro ao registrar pedido. Verifique se o prazo é <= 30 dias e se os IDs existem.' });
    }
};
