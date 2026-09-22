const db = require('../db/conexao');

class ProdutoModel {
    static async buscarTodos() {
        const [linhas] = await db.query('SELECT * FROM produtos ORDER BY nome ASC');
        return linhas;
    }

    static async criar({ id, sku, nome, preco_venda, estoque_fisico, categoria }) {
        const sql = `INSERT INTO produtos (id, sku, nome, preco_venda, estoque_fisico, categoria) 
                     VALUES (?, ?, ?, ?, ?, ?)`;
        const valores = [id, sku, nome, preco_venda, estoque_fisico, categoria];
        await db.query(sql, valores);
        return { id, sku, nome, preco_venda, estoque_fisico, categoria };
    }

    static async atualizar(id, { sku, nome, preco_venda, estoque_fisico, categoria }) {
        const sql = `UPDATE produtos 
                 SET sku = ?, nome = ?, preco_venda = ?, estoque_fisico = ?, categoria = ? 
                 WHERE id = ?`;
        const valores = [sku, nome, preco_venda, estoque_fisico, categoria, id];
        await db.query(sql, valores);
        return { id, sku, nome, preco_venda, estoque_fisico, categoria };
    }

    static async deletar(id) { 
        const sql = 'DELETE FROM produtos WHERE id = ?'; 
        await db.query(sql, [id]); 
        return { id }; 
    }

}

module.exports = ProdutoModel;