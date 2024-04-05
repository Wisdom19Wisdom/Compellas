import React, {useState} from 'react'
import {FaBorderAll, FaListUl, FaArrowLeft, FaMoneyBill, FaBell, FaAngleLeft, FaArrowCircleLeft, FaAngleRight, FaAngleDown} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <div className='sidebar'>
      <div className='side_section'>
        <Link to="/"><p><div className='bars'><FaBorderAll/></div>Dashboard</p></Link>
        <p onClick={toggleSubMenu} className='order'><div ><FaListUl/> Order  {subMenuVisible ? <FaAngleDown/> : <FaAngleRight/>}</div></p>
        {subMenuVisible && (
          <>
          <NavLink to="/All_order"><p><div className='sub-menu'>All Orders</div></p></NavLink>
          <NavLink to="/Delivered"><p><div className='sub-menu'>Delivered Orders</div></p></NavLink>
          <NavLink to="/Order"><p><div className='sub-menu'>Order in Progress</div></p></NavLink>
          <NavLink to="/Cancelle"><p><div className='sub-menu'>Cancelled Orders</div></p></NavLink>
          </>
        )}
        
          
        <NavLink to="/Revenue"><p><div className='bars'><FaMoneyBill/></div>Revenue</p></NavLink>
        <NavLink to="/Notificatio"><p><div className='bars'><FaBell/></div>Notification</p></NavLink>
      </div>

      <span><div className='bars'><FaArrowCircleLeft/></div><p>Log Out</p></span>
    </div>
  )
}

export default Sidebar
