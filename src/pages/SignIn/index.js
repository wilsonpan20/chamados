import React from 'react';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import './signin.css'
import logo from '../../assets/logo.png'


function SigIn() {
  const [email,setEmail] = useState('')
  const [password,setpassoword] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    alert('clicou')
  }
  return (
    <div className='container-center'>
      <div className='login'>
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <input type="text" placeholder='email@email.com' value={email} onChange={ (e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder='***********' value={password} onChange={ (e)=> setpassoword(e.target.value)}/>
        <button type='submit'>Acessar</button>
        </form>
         <Link to="/register"> Criar uma conta</Link>  
      </div>

    </div>
  );
}

export default SigIn;