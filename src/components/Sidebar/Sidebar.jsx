import React from 'react'
import {FaBorderAll, FaListUl, FaArrowLeft, FaMoneyBill, FaBell, FaAngleLeft, FaArrowCircleLeft} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='side_section'>
        <Link to="/"><p><div className='bars'><FaBorderAll/></div>Dashboard</p></Link>
        <NavLink to="/Order"><p><div className='bars'><FaListUl/></div>Order</p></NavLink>
        <NavLink to="/Revenue"><p><div className='bars'><FaMoneyBill/></div>Revenue</p></NavLink>
        <NavLink to="/Notificatio"><p><div className='bars'><FaBell/></div>Notification</p></NavLink>
      </div>

      <span><div className='bars'><FaArrowCircleLeft/></div><p>Log Out</p></span>
    </div>
  )
}

export default Sidebar
