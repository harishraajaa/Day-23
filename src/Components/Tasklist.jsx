import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import editTask from './Header.jsx'
import Selectcom from './Selectcom.jsx'

function Tasklist({ taskData, setTaskData }) {

    let [taskname,setTaskName]=useState("")
    let [taskdesc,setTaskdesc]=useState("")
    let [status,setStatus]=useState("")


    return <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        taskData.map((e,i) => {
                            return <>
                                <div className="col mb-5" key={i}>
                                    <div className="card text-bg-dark mb-3">
                                        <div className="card-body p-4">
                                            <div className="text-left">
                                                <h6>Name: </h6>
                                                <sup>{e.taskname}</sup>
                                                <h6>Description: </h6>
                                                {e.taskdesc}
                                              {/* <Selectcom status={status} setStatus={setStatus}/> */}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <Button variant='info' onClick={()=> editTask(e.taskid)}>Edit</Button>
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            <Button variant='danger' onClick={() => deleteTask(e.taskid)}>Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </section>

    </>
}

export default Tasklist
