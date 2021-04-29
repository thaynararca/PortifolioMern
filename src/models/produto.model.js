const mongoose = require('mongoose');

const DataShema = new mongoose.Schema({
    nome_produto: String,
    descricao_produto: String,
    preco_produto: Number,
    qtd_produto: { type: Number, default: 0 },
}, {
    timestamps: true
});

const produtos = mongoose.model('Produtos', DataShema);
module.exports = produtos;