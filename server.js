const express = require('express');
const cors = require('cors');
require('dotenv').config();

const produtoRoutes = require('./routes/produtoRoutes');
const cepRoutes = require('./routes/cepRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/api/produtos', produtoRoutes);
app.use('/api/cep', cepRoutes);
app.use('/api/pedidos', pedidoRoutes); 

app.get('/api/status', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        mensagem: 'API IMMA Atacadista rodando com sucesso!' 
    });
});

app.listen(PORT, () => {
    console.log(` Servidor rodando na porta ${PORT}`);
});