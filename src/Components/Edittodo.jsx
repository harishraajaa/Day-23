import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Edittodo({taskData,setTaskData}) {

    let [taskname, setTaskName] = useState("")
    let [taskdesc, setTaskdesc] = useState("")
    let [status, setStatus] = useState("ncom")
    let navigate= useNavigate() 
    let {id}= useParams()

    function updateTodo() {

        let data = { taskname, taskdesc, status }
        data.taskid = Number(id)
        
        let index=-1
        let temp=Number(id)
        for(let i=0;i<taskData.length;i++){
            if(taskData[i].taskid===temp)
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
            taskData.splice(index,1,data)
            setTaskData([...taskData])
        }
      navigate('/mytodos')

    }

    function gettableData(){
        //console.log(id)
        let index=-1
        let temp=Number(id)
        
        for(let i=0;i<taskData.length;i++){
            if(taskData[i].taskid===temp)
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
            setTaskName(taskData[index].taskname)
            setTaskdesc(taskData[index].taskdesc)
            setStatus(taskData[index].status)
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
        <br />
        <br />
        <br />
        {/* Section-1 - Input container*/}
        <div className='container'>
        <Card>
                <Card.Header as="h5">Edit Todo</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <Form id='formdata'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" value={taskname} placeholder="Todo Name" onChange={(e) => setTaskName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" value={taskdesc} placeholder="Todo Description" onChange={(e) => setTaskdesc(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" onClick={() => updateTodo()}>
                                Update Todo
                            </Button>
                        </Form>
                    </Card.Title>
                </Card.Body>
        </Card>
        </div>
  </>
}

export default Edittodo
