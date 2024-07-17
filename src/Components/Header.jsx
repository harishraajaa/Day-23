import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

function Header({ taskData, setTaskData }) {

    let [taskname, setTaskName] = useState("")
    let [taskdesc, setTaskdesc] = useState("")
    let [status, setStatus] = useState("")
    let [filterStatus, setFilterStatus] = useState("all")


    let navigate = useNavigate()

    function setStatusfrom(e, id) {
        gettableData(id)
        setStatus(e.target.value)
        console.log(status)

        let data = { taskname, taskdesc, status }
        data.taskid = Number(id)
        //console.log(data)

        let index = -1
        let temp = Number(id)
        for (let i = 0; i < taskData.length; i++) {
            if (taskData[i].taskid === temp) {
                index = i
                break
            }
            else {
                index = -1
            }
        }
        //console.log(index)

        if (index !== -1) {
            taskData.splice(index, 1, data)
            setTaskData([...taskData])
        }

        setTaskData([...taskData])
        //console.log(taskData)
    }
    function deleteTask(id) {

        let index = -1
        console.log(id)
        for (let i = 0; i < taskData.length; i++) {

            if (taskData[i].taskid === id) {
                index = i
                break
            }
            else {
                index = -1
            }
        }

        if (index !== -1) {
            taskData.splice(index, 1)
            setTaskData([...taskData])
        }
        else {
            alert("Error")
        }
    }

    function gettableData(id) {
        //console.log(id)
        let index = -1
        let temp = Number(id)

        for (let i = 0; i < taskData.length; i++) {
            if (taskData[i].taskid === temp) {
                index = i
                break
            }
            else {
                index = -1
            }
        }
        //console.log(index)
        if (index !== -1) {
            //console.log(index)
            console.log(taskData)
            setTaskName(taskData[index].taskname)
            setTaskdesc(taskData[index].taskdesc)
            setStatus(taskData[index].status)
        }
        else {
            alert("Error")
        }

    }


    return <>
        <br />
        <br />
        <br />
        {/* Section-2 */}
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand>My Todos</Navbar.Brand>
                <Form className="d-flex">
                    <Form.Select aria-label="Status" defaultValue="all" onChange={(e) => setFilterStatus(e.target.value)}>
                        <option>Filter Status</option>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="not">Not Completed</option>
                    </Form.Select>
                </Form>
            </Container>
        </Navbar>
        {/* Section-3 */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {filterStatus==="all"?                            
                    taskData.map((e, i) => {
                                let tempid=e.taskid
                                return <>
                                    <div className="col mb-5" key={i}>
                                        <div className="card text-bg-dark mb-3">
                                            <div className="card-body p-4">
                                                <div className="text-left">
                                                    <h6>Name: </h6>
                                                    <sup className='tasknameclass'>{e.taskname}</sup>
                                                    <h6>Description: </h6>
                                                    <sup className='taskdescclass'>{e.taskdesc}</sup>
                                                    <Form.Group className="mb-1">
                                                        <Form.Label><h6>Status: </h6></Form.Label>
                                                        <Form.Select value={e.status} onChange={(e) => setStatusfrom(e,tempid)}>                                            
                                                            <option value='ncom'>Not Completed</option>
                                                            <option value='com'>Completed</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <Button variant='info' onClick={() => navigate(`/edittodo/${e.taskid}`)}>Edit</Button>
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
                            }):<h1>Harish</h1>}
                </div>
            </div>
        </section>
    </>

}

export default Header;