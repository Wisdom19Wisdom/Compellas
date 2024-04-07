import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [visib, setVisib] = useState(false);
  return (
    <div>
        <div className="container">
            <div className="container-body">
              <h1>Sign in to Suru</h1>
              <h4>Welcome back! Please enter your details.</h4>

              <form>
                <input type="email" name="email" placeholder="Email Address"/>
                <br />
                <div className="relative">
                  <input type={visib ? "text" : "password"} name="password" placeholder="Password"/><div className='ShowHide' onClick={() => setVisib(!visib)}>{visib ? <FaEye/> : <FaEyeSlash/>}</div>
                </div>
                <br />
                <Link className='Forgot'>Forgot Password</Link>
                <button type="submit">Log In</button>

              </form>

              <p>Dont have an account? <Link to="/SignUp">Signup</Link></p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Login

