import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Order from "./components/pages/Order"
import Revenue from "./components/pages/Revenue"
import Dashboar from "./components/pages/Dashboar"
import Notificatio from "./components/pages/Notificatio"
import AllOrder from "./components/pages/All_order"
import Cancelle from "./components/pages/Cancelled"
import Delivered from "./components/pages/Delivered"


const App = () => {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboar/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path='/Revenue' element={<Revenue/>}/>
        <Route path='/Notificatio' element={<Notificatio/>}/>
        <Route path='/All_order' element={<AllOrder/>}/>
        <Route path='/Cancelle' element={<Cancelle/>}/>
        <Route path='/Delivered' element={<Delivered/>}/>
      </Routes>
    </div>
  )
}

export default App
