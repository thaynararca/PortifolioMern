const Cliente = require('../models/cliente.model');

module.exports = {
    async index(req, res) {
        const client = await Cliente.find();
        res.json(client);
    },

    async create(req, res) {
        const { nome_client, cpf_client } = req.body;
        let data = {};
        let client = await Cliente.findOne({ nome_Cliente });

        if (!client) {
            data = { nome_client, cpf_client };
            client = await Cliente.create(data);
            return res.status(200).json(client);
        } else {
            return res.status(500).json(client);
        }

    },

    /*async details(req, res) {
        const { _id } = req.params;
        const client = await Cliente.findOne({ _id });
        res.json(client);
    },

    async  delete(req, res)  {        
        const {  _id } =  req.params;
        const  client  = await Cliente.findByIdAndDelete({ _id });
        return res.json(client);
    },

    async  update(req, res)  {        
        const {  _id, nome_Cliente, descricao_Cliente, preco_Cliente, qtd_Cliente } =  req.body;
        const data = { nome_Cliente, descricao_Cliente, preco_Cliente, qtd_Cliente };
        const  client = await Cliente.findOneAndUpdate({ _id }, data, { new: true });
        res.json(client);
    },*/

}