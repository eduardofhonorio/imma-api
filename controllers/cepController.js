const { buscarEnderecoPorCep } = require('../helpers/cepHelper');

exports.consultarCep = async (req, res) => {
    const { cep } = req.params;
    try {
        const endereco = await buscarEnderecoPorCep(cep);
        res.status(200).json(endereco);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};