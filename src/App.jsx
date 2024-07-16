import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Adduser from './Components/Adduser'
import Profile from './Components/Profile'
import Edituser from './Components/Edituser'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  let [user, userstate] = useState([
    {
      id: 1,
      name: "Harish",
      email: "rvharish@gmail.com",
      subscription: true
    },
    {
      id: 2,
      name: "Pavithra",
      email: "pavibas@gmail.com",
      subscription: false
    },
    {
      id: 3,
      name: "Vijayalakshmi",
      email: "vijiharish@gmail.com",
      subscription: true
    }
  ])
  return <>
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/adduser' element={<Adduser user={user} userstate={userstate}/>}></Route>
          <Route path='/dashboard' element={<Dashboard user={user} userstate={userstate} />}></Route>
          <Route path='/edituser/:id' element={<Edituser user={user} userstate={userstate}/>}></Route>
          <Route path='*' element={<Navigate to='/Dashboard' />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  </>
}

export default App
