const ProdutoModel = require('../models/produtoModel');

exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await ProdutoModel.buscarTodos();
        res.status(200).json(produtos);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro interno ao consultar produtos no banco.' });
    }
};

exports.cadastrarProduto = async (req, res) => {
    try {
        const novoProduto = await ProdutoModel.criar(req.body);
        res.status(201).json(novoProduto);
    } catch (erro) {
        res.status(400).json({ erro: 'Erro ao cadastrar produto. Verifique se o SKU já existe.' });
    }
};

exports.atualizarProduto = async (req, res) =>  {
    try {
        const { id } = req.params;  
        const produtoAtualizado = await ProdutoModel.atualizar(id, req.body);
        res.status(200).json({ 
            mensagem: 'Produto atualizado com sucesso por um gerente!', 
            produto: produtoAtualizado 
        });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro interno ao atualizar produto no banco.' });
    }

};
    exports.deletarProduto = async (req, res) =>  {
         try {
             const { id } = req.params; 
             await ProdutoModel.deletar(id); 
             res.status(200).json({ mensagem: 'Produto removido com sucesso do estoque!' });
             } catch (erro) {
                 res.status(500).json({ erro: 'Erro interno ao remover produto.' }); } 
                };
