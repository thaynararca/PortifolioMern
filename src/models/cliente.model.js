const mongoose = require('mongoose');

const DataShema = new mongoose.Schema({
    nome_client: String,
    cpf_client: String,
});

const clientes = mongoose.model('Clientes', DataShema);
module.exports = clientes;