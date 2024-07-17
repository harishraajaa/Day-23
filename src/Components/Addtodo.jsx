import React from 'react'
import { Card } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addtodo({taskData,setTaskData}) {

    let [taskname, setTaskName] = useState("")
    let [taskdesc, setTaskdesc] = useState("")
    let [status, setStatus] = useState("")
    let navigate= useNavigate() 

    function AppendTask() {

        let data = { taskname, taskdesc }
        data.taskid = taskData.length ? taskData[taskData.length - 1].taskid + 1 : 1
        data.status='ncom'
        
        taskData.push(data)
        setTaskData([...taskData])
        document.getElementById('formdata').reset()
        navigate('/mytodos')

    }
  return <>
  <br />
        <br />
        <br />
        {/* Section-1 - Input container*/}
        <div className='container'>
        <Card>
                <Card.Header as="h5">Add Todo</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <Form id='formdata'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" value={taskname} placeholder="Todo Name" onChange={(e) => setTaskName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" value={taskdesc} placeholder="Todo Description" onChange={(e) => setTaskdesc(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" onClick={() => AppendTask()}>
                                Add Todo
                            </Button>
                        </Form>
                    </Card.Title>
                </Card.Body>
        </Card>
        </div>
  </>
}

export default Addtodo
