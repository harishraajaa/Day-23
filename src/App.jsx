import React from 'react'
import Navbartodo from './Components/Navbartodo'
import Header from './Components/Header'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Addtodo from './Components/Addtodo'
import Edittodo from './Components/Edittodo'


function App() {

  let [taskData, setTaskData] = useState([
    {
      taskid:1,
      taskname:"Task-1",
      taskdesc:"Report Making",
      status:"ncom"
    },
    {
      taskid:2,
      taskname:"Task-2",
      taskdesc:"Report Upload",
      status:"ncom"
    },
    {
      taskid:3,
      taskname:"Task-3",
      taskdesc:"Report Download",
      status:"ncom"
    }
  ])

  return <>
  <div id="wrapper">
    <BrowserRouter>
    <Navbartodo />
    <Routes>
    <Route path='/' element={<Header taskData={taskData} setTaskData={setTaskData}/>}></Route> 
    <Route path='/mytodos' element={<Header taskData={taskData} setTaskData={setTaskData}/>}></Route>
    <Route path='/addtodo' element={<Addtodo taskData={taskData} setTaskData={setTaskData}/>}></Route>
    <Route path='/edittodo/:id' element={<Edittodo taskData={taskData} setTaskData={setTaskData}/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  </>
}

export default App
