import React, { useState } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import { FaEye, FaEyeDropper, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {

  const [visible, setVisible] = useState(false);
  const[vision, setVision] = useState(false);


  return (
    <div>
        <div className="container">
            <div className="container-body">
                <h1>Create an account with Suru</h1>
                <h4>Hey! Setup your account to embark on this journey</h4>

              <form>
                <input type="text" className='inpBox' name="fullName" placeholder="Full Name"/>
                <br />
                <input type="email" className='inpBox' name="email" placeholder="Email Address"/>
                <br />
                <input type="tel" className='inpBox' name="phoneNumber" placeholder="Phone Number"/>
                <br />
                <input type="text" className='inpBox' name="address" placeholder="Address"/>
                <br />
                <input type="text" className='inpBox' name="referral" placeholder="Referral Code"/>
                <br />
                <div className="relative">
                  <input type={visible ? "text" : "password"} className='inpBox' name="password" placeholder="Password"/><div className='ShowHide' onClick={() => setVisible(!visible)}>{visible ? <FaEye/> : <FaEyeSlash/>}</div>
                </div>
                <br />
                <div className="confirmRelative">
                  <input type={vision ? "text" : "password"} className='inpBox' name="confirmPassword" placeholder="Confirm Password"/><div className='hide' onClick={() => setVision(!vision)}>{vision ? <FaEye/> : <FaEyeSlash/>}</div>
                </div>
                <br />
                <p><input type="checkbox"/>  Agree to <span>Terms and Conditions</span></p>
                <br />
                <button type="submit">Create Account</button>
              </form>

              <p>Already have an account? <Link to="/Login">Signin</Link></p>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp
