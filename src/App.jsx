//import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login  from '../pages/Login';
import Cadastro from '../src/Components/Cadastro/Cadastro';
import CriarConta from '../pages/CriarConta';
import LoginUser from './Components/LoginUser/LoginUser';

function App() {
  

  return (
    
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/CriarConta' element={<CriarConta />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Cadastro' component={Cadastro} />
      <Route path='/LoginUser' component={LoginUser} />
     
      
    </Routes>
  </Router>
      
       
    
  )
}

export default App
