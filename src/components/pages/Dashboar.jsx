import React,{ useState } from 'react'
import './Dashboar.css'
import { FaBook, FaCar, FaList, FaMoneyBill } from 'react-icons/fa';

const Dashboar = () => {

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const today = new Date().toISOString().slice(0, 10);


  return (
    <div className='container'>
      <div className='container-body'>

        <div className="greetings">
            <div>
              <h2>👋Good morning Yinka!</h2>
              <p>Let's get productive today</p>
            </div>
        </div>

        <div className="today_dashboard">
          <h2>Your current dashboard for today</h2>
          <input 
            type="date"
            id="datePicker"
            value={selectedDate || today}
            onChange={handleDateChange}
          />
        </div>

        <div className="order">
          <div className="order-box">
            <div className="order-box-body">
              <div className='fa-icon'><FaCar/></div>
              <div>
                <p className='order-text'>Total Shipment</p>
                <h2>35</h2> 
              </div>
            </div>
          </div>
          <div className="order-box">
            <div className="order-box-body">
              <div className='fa-icon'><FaList/></div>
              <div>
                <p className='order-text'>Total Order</p>
                <h2>80</h2> 
              </div>
            </div>
          </div>
          <div className="order-box">
            <div className="order-box-body">
              <div className='fa-icon'><FaBook/></div>
              <div>
                <p className='order-text'>Pending Order</p>
                <h2>35</h2>
              </div>
            </div>
          </div>
          <div className="order-box">
            <div className="order-box-body">
              <div className='fa-icon'><FaMoneyBill/></div>
              <div>
                <p className='order-text'>Total Revenue</p>
                <h2>&#x20A6;100,000</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='shipment-payment'>
            <div className='capt'>
              <caption>Shipment Statistics</caption>
              <caption>View all</caption>
            </div>
          <table>
            
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Vendor/Source</th>
                <th>Destination</th>
                <th>Departure Date</th>
                <th>Status</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td datatype='Order Id'>#142376</td>
                <td datatype='Vendor/Source'>Ocean Freight</td>
                <td datatype='Destination'>Lagos</td>
                <td datatype='Departure Date'>09/03/2024</td>
                <td datatype='Status'>Pending</td>
                <td datatype='Cost'>&#x20A6;3000</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </div>
  )
}

export default Dashboar
