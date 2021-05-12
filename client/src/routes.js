import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';


//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutosEditar from './pages/admin/produtos/produtos.editar';
import ProdutosCadastrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

//IMPORTS CLIENT
import Home from './pages/client/home';
import ProdutoDetails from './pages/client/produtos/produtos.details';

export default function Routes(){

     return(
          <BrowserRouter>
               <Switch>
                    {/*ROTA CLIENTE*/}
                    <Route path="/" exact component={Home} />
                    <Route path="/produtos/:idProduto" exact component={ProdutoDetails} />

                    {/*ROTA ADMIN*/}
                    <Route path="/admin" exact component={Dashboard} />

                    <Route path="/admin/produtos" exact component={Produtos} />
                    <Route path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                    <Route path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />


                    <Route path="/admin/usuarios" exact component={Usuarios} />
                    <Route path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar} />
                    <Route path="/admin/usuarios/editar/:idUsuario" exact component={UsuariosEditar} />

               </Switch>
          </BrowserRouter>
     )
}