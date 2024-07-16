import React from 'react'
import Topbar from './Topbar'
import Card from './Card'
import Table from 'react-bootstrap/Table'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Dashboard({user,userstate}) {

    let navigate=useNavigate()
    function deleteUser(id){
        //console.log(id)
        let index=-1

        for(let i=0;i<user.length;i++){
            if(user[i].id===id)
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
            user.splice(index,1)
            userstate([...user])
        }
        else{
            alert("Error")
        }
        
        
    }

    let data = [

        {
            title: "Earnings (Monthly)",
            value: "$40,000",
            color: "primary",
            icon: "fa-calendar",
            isProgress: false
        },

        {
            title: "Earnings (Annual)",
            value: "$215,000",
            color: "success",
            icon: "fa-dollar-sign",
            isProgress: false
        },

        {
            title: "Tasks",
            value: "50%",
            color: "info",
            icon: "fa-clipboard-list",
            isProgress: true
        },

        {
            title: "Pending Requests",
            value: "18",
            color: "warning",
            icon: "fa-comments",
            isProgress: false
        }

    ]

    return <>
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
                <Topbar />
                <div className="container-fluid">
                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                        {
                            data.map((e, i) => {

                                return <Card data={e} key={i} />

                            })
                        }
                    </div>
                    <h1 className="h3 mb-3 text-gray-800">User Management</h1>    
                    <div className='row'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr key={0}>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subscription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((e)=>{
                                        
                                        return    <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                                <td>{e.subscription?<p>Active</p>:<p>In Active</p>}</td>
                                                <td>
                                                    <Button variant='primary' onClick={()=>navigate(`/edituser/${e.id}`)}>Edit</Button>
                                                    &nbsp;
                                                    <Button variant='danger' onClick={()=>deleteUser(e.id)}>Delete</Button>
                                                </td>
                                            </tr>
                                
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard
