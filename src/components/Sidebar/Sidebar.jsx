import React from 'react'
import {FaBorderAll, FaListUl, FaArrowLeft, FaMoneyBill} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
// import dashboard from '../../assets/dashboard.png'
// import orders from '../../assets/Orders.png'
// import products from '../../assets/Products.png'
// import logOut from '../../assets/logOut.png'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='side_section'>
        <Link to="/"><p><div className='bars'><FaBorderAll/></div>Dashboard</p></Link>
        <NavLink to="/Order"><p><div className='bars'><FaListUl/></div>Order</p></NavLink>
        <NavLink to="/Revenue"><p><div className='bars'><FaMoneyBill/></div>Revenue</p></NavLink>
      </div>

      <span><div className='bars'><FaArrowLeft/></div><p>Log Out</p></span>
    </div>
  )
}

export default Sidebar
