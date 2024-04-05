import React, { useState } from 'react'
import {FaBorderAll, FaListUl, FaBars, FaTimes, FaMoneyBill, FaBell, FaArrowCircleLeft, FaAngleDown, FaAngleRight} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import autodesk from "../../assets/Autodesk_Logo.webp";
import hungary from "../../assets/Hungary-pic8.jpg";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(!isOpen)}

    const [subMenuVisible, setSubMenuVisible] = useState(false);

    const toggleSubMenu = () => {
      setSubMenuVisible(!subMenuVisible);
    };

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
          <p onClick={toggleSubMenu} className='order1'><div ><FaListUl/> Order  {subMenuVisible ? <FaAngleDown/> : <FaAngleRight/>}</div></p>
            {subMenuVisible && (
              <>
              <NavLink to="/All_order" onClick={toggle}><p><div className='sub-menu'>All Orders</div></p></NavLink>
              <NavLink to="/Delivered" onClick={toggle}><p><div className='sub-menu'>Delivered Orders</div></p></NavLink>
              <NavLink to="/Order" onClick={toggle}><p><div className='sub-menu'>Order in Progress</div></p></NavLink>
              <NavLink to="/Cancelle" onClick={toggle}><p><div className='sub-menu'>Cancelled Orders</div></p></NavLink>
              </>
            )}
          <NavLink to="/Revenue" onClick={toggle}><p><div className='icons'><FaMoneyBill/> Revenue</div></p></NavLink>
          <NavLink to="/Notificatio" onClick={toggle}><p><div className='icons'><FaBell/> Notification</div></p></NavLink>
          <span><div className='logout'><FaArrowCircleLeft/> Logout</div></span>
        </div>
    </nav>
  )
}

export default Navbar
