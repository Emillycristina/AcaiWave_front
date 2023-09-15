//import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login  from '../pages/Login';
import Cadastro from '../src/Components/Cadastro/Cadastro';
import CarouselImage from '../src/Components/Corousel/CarouselImage';
import CriarConta from '../pages/CriarConta';
import LoginUser from './Components/LoginUser/LoginUser';
import Listagem from './Components/Listagem/Listagem';
import Navbar from './Components/Navbar/Navbar';
import Pedidos from '../pages/Pedidos'
import PedidoStatus from '../pages/PedidoStatus';
import MontarPedido from '../src/Components/MontarPedido/MontarPedido';
import StatusPedido from '../src/Components/StatusPedido/StatusPedido';



function App() {
  

  return (
    
  <Router>
    <Routes>
      <Route path='/' exact element={<Login />}/>
      <Route path='/CriarConta' element={<CriarConta />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Pedidos' element={<Pedidos />} />
      <Route path='/PedidoStatus' element={<PedidoStatus/>} />
      <Route path='/Cadastro' component={Cadastro} />
      <Route path='/LoginUser' component={LoginUser} />
      <Route path='/Listagem' component={Listagem} />
      <Route path='/Navbar' component={Navbar} />
      <Route path='/CarouselImage' component={CarouselImage} />
      <Route path='/MontarPedido' component={MontarPedido} />
      <Route path='/StatusPedido' component={StatusPedido} />
    </Routes>
  </Router>
      
      
    
  )
}

export default App
