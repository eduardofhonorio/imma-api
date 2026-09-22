const axios = require('axios');

async function buscarEnderecoPorCep(cep) {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
        throw new Error('CEP inválido. O formato deve conter exatos 8 dígitos.');
    }

    const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);

    if (resposta.data.erro) {
        throw new Error('CEP não encontrado na base de dados nacional.');
    }

    return {
        cep: cepLimpo,
        logradouro: resposta.data.logradouro,
        bairro: resposta.data.bairro,
        cidade: resposta.data.localidade,
        uf: resposta.data.uf
    };
}

module.exports = { buscarEnderecoPorCep };