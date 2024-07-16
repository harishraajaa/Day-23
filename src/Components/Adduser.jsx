import React, { useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Adduser({user, userstate}) {

  let [name,setName]= useState("")
  let [email,setEmail]= useState("")
  let [sub,setSub] = useState(false)
  let navigate= useNavigate() 

  function Appenduser() {
   
    let data={name,email,sub}
    data.id= user.length?user[user.length-1].id+1:1

    user.push(data)
    userstate([...user])

    navigate('/home')
  }

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <Topbar />
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Add User</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>
          <div className="row">
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email Id" onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Subscription" onChange={(e)=> setSub(e.target.checked)}/>
      </Form.Group>

      <Button variant="primary" onClick={(e)=> Appenduser(e)}>
        Submit
      </Button>
    </Form>

          </div>
        </div>

      </div>
    </div>
  </>
}

export default Adduser
