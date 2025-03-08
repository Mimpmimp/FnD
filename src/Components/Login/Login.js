import React from "react";
import './Login.css';
import { FaUser,FaEyeSlash } from "react-icons/fa";
import logo from '../Assets/fmdlogo1.png';

const Login = () => {
  return(
    <div className="LogoCon">
      <img className="logo" src={logo} alt="fmdlogo1" />
    <div className="Log">
      <form action ="">
        <h1>LOGIN</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
          <FaEyeSlash className='icon' />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
    </div>
  )
}





export default Login;
