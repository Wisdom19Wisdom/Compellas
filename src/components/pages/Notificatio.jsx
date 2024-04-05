import React from 'react'
import "./Notification.css"
import { FaClock, FaTimes } from 'react-icons/fa'

const Order = () => {
  return (
    <div className='container'>
      <div className='container-body'>

        <h2 className='head-title'>Notifications</h2>

        <div className="notification-box">
          <p className='clock'><FaClock/>  1:00 PM at March 10, 2024</p>
          <h3 className='note-head'>Service Needed</h3>
          <p className='notification-body'>Your services is needed to delivery goods to Lekki for Abdurrazzaq Abdulmuhsin</p>
          <div className="notification-btn">
            <button className='accept-btn'>Accept</button>
            <button className='decline-btn'>Decline</button>
            <h3>More Information</h3>
          </div>
        </div>

        <div className="notification-box">
          <p className='clock'><FaClock/>  1:00 PM at March 10, 2024</p>
          <h3 className='note-head'>Withdrawer Success</h3>
          <p className='note-cancel'><FaTimes/></p>
          <p className='notification-body'>Your Withdrawal of &#8358;300,000 has been approved and successfully paid to your Bank account.</p>
        </div>

        <div className="notification-box">
          <p className='clock'><FaClock/>  1:00 PM at March 10, 2024</p>
          <h3 className='note-head'>Service Needed</h3>
          <p className='notification-body'>Your services is needed to delivery goods to Lekki for Abdurrazzaq Abdulmuhsin</p>
          <div className="notification-btn">
            <button className='accept-btn'>Accept</button>
            <button className='decline-btn'>Decline</button>
            <h3>More Information</h3>
          </div>
        </div>

        <div className="notification-box">
          <p className='clock'><FaClock/>  1:00 PM at March 10, 2024</p>
          <h3 className='note-head'>Withdrawer Success</h3>
          <p className='note-cancel'><FaTimes/></p>
          <p className='notification-body'>Your Withdrawal of &#8358;300,000 has been approved and successfully paid to your Bank account.</p>
        </div>

      </div>
    </div>
  )
}

export default Order
