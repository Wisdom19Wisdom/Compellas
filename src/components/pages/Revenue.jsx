import React,{ useState } from 'react'
import "./Revenue.css"
import { FaBook, FaCar, FaList, FaMoneyBill } from 'react-icons/fa';
import {Chart as chartjs, defaults} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import sourceData from './sourceDate.json'

defaults.maintainAspectRatios = false;
defaults.responsive = true;

const Revenue = () => {

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const today = new Date().toISOString().slice(0, 10);


  return (
    <div className='container'>
      <div className='container-body'>
        <div className="today_revenue">
          <h2>Revenue</h2>
          <input 
            type="date"
            id="datePicker"
            value={selectedDate || today}
            onChange={handleDateChange}
          />
        </div>

        <div className="balance">
          <div>
            <h2>&#x20A6;500,000</h2>
            <p>Available Balance</p>
            <button className='btn'>Withdraw</button>
          </div>
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

        <div className="chart">
          {/* <Bar
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              datasets:[{
                label: "Chart Overview",
                data: [50,700,400,850,200,860,100,500,280,466,500,990],
              }]
            }}
          /> */}
          <Bar
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Charts Overview",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: ["#84EC48"],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>

  )
}

export default Revenue
