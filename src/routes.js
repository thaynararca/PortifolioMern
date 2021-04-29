const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const Produto = require('./controllers/produtos.controller')


routes.get('/', Usuario.index);

// ROTAS DE USUÁRIOS
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuariosDetails/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios/', Usuario.update);

// ROTAS DE PRODUTOS
routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos', Produto.index);
routes.get('/api/produtosDetails/:_id', Produto.details);
routes.delete('/api/produtos/:_id', Produto.delete);
routes.put('/api/produtos/', Produto.update);


module.exports = routes;