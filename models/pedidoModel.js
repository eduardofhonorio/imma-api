const db = require('../db/conexao');

class PedidoModel {
    static async buscarPorCliente(clienteId) {
        const sql = `
            SELECT 
                p.id AS numero_pedido,
                p.status,
                p.total,
                p.prazo_faturamento,
                p.data_pedido,
                e.logradouro,
                e.cidade
            FROM pedidos p
            JOIN enderecos e ON p.endereco_id = e.id
            WHERE p.cliente_id = ?
            ORDER BY p.data_pedido DESC
        `;
        const [linhas] = await db.query(sql, [clienteId]);
        return linhas;
    }

    static async criar({ id, cliente_id, endereco_id, status, total, prazo_faturamento }) {
        const sql = `
            INSERT INTO pedidos
            (id, cliente_id, endereco_id, status, total, prazo_faturamento)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const valores = [id, cliente_id, endereco_id, status || 'pendente', total, prazo_faturamento];
        await db.query(sql, valores);
        return { id, cliente_id, endereco_id, status: status || 'pendente', total, prazo_faturamento };
    }
}

module.exports = PedidoModel;