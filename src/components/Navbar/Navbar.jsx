import React, { useState } from 'react'
import {FaBorderAll, FaListUl, FaArrowLeft, FaBars, FaTimes, FaMoneyBill, FaBell, FaArrowCircleLeft} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import autodesk from "../../assets/Autodesk_Logo.webp";
import hungary from "../../assets/Hungary-pic8.jpg";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(!isOpen)}

  return (
    <nav>
        <img className='auto_img' src={autodesk} alt="logo" />
        <div className='greetings'>
            <h2>👋Good morning Yinka!</h2>
            <p>Let's get productive today</p>
        </div>
        <div className='profile_section'>
            <Link to="/Notificatio"><span><FaBell/></span></Link>
            <img src={hungary} alt="profile pic" className='profile_img'/>
            <div>
                <h4>Wisdom</h4>
                <p>Admin</p>
            </div>
        </div>
        <div className='bars' onClick={toggle}>{isOpen ? <FaTimes/> : <FaBars/>}</div>
        <div className='side_bar' style={{display: isOpen ? "block": ""}}>
          <Link to="/" onClick={toggle}><p><div className='icons'><FaBorderAll/> Dashboard</div></p></Link>
          <NavLink to="/Order" onClick={toggle}><p><div className='icons'><FaListUl/> Order</div></p></NavLink>
          <NavLink to="/Revenue" onClick={toggle}><p><div className='icons'><FaMoneyBill/> Revenue</div></p></NavLink>
          <NavLink to="/Notificatio" onClick={toggle}><p><div className='icons'><FaBell/> Notification</div></p></NavLink>
          <span><div className='logout'><FaArrowCircleLeft/> Logout</div></span>
        </div>
    </nav>
  )
}

export default Navbar
