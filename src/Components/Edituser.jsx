import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';


function Edituser({user, userstate}) {

    let [name,setName]= useState("")
    let [email,setEmail]= useState("")
    let [subscription,setSub] = useState(false)
    let navigate= useNavigate() 
    let {id}= useParams()
  
    function UpdateUser() {
        let temp=Number(id)
      let data={id:temp,name,email,subscription}
      
      let index=-1
        
        
        for(let i=0;i<user.length;i++){
            if(user[i].id===temp)
            {
                index=i
                break
            }
            else{
                index=-1
            }
        }
        //console.log(index)

        if(index!==-1){
            user.splice(index,1,data)
            userstate([...user])
        }
      navigate('/home')
    }

    
    function gettableData(){
        //console.log(id)
        let index=-1
        let temp=Number(id)
        
        for(let i=0;i<user.length;i++){
            if(user[i].id===temp)
            {
                index=i
                break
            }
            else{
                index=-1
            }
        }
        //console.log(index)
        if(index!==-1){
            setName(user[index].name)
            setEmail(user[index].email)
            setSub(user[index].subscription)
        }
        else{
            alert("Error")
        }

    }
    
    useEffect(()=>{
        if(id){
            gettableData()
        }
    },[])
  
    return <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
              <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Id" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" checked={subscription} label="Subscription" onChange={(e)=> {setSub(e.target.checked)}}/>
        </Form.Group>
  
        <Button variant="primary" onClick={(e)=> UpdateUser()}>
          Submit
        </Button>
      </Form>
  
            </div>
          </div>
  
        </div>
      </div>
    </>
  }

export default Edituser
