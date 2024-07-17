import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Card({data,taskData,setTaskData}) {
    
    let [status,setStatus]=useState("ncom")

    function deleteTask(id){
        console.log("1--"+id)
        let index=-1
        for(let i=0;i<data.length;i++){
            console.log("2--"+data[i].taskid)
            if(data[i].taskid===id)
            {
                index=i
                break
            }
            else{
                index=-1
            }
        }
        console.log("3--"+index)
        // if(index!==-1){
        //     user.splice(index,1)
        //     userstate([...user])
        // }
        // else{
        //     alert("Error")
        // }
        
        
    }


    return <>
           
           <div className="col mb-5">
                          <div className="card text-bg-dark mb-3">
                              <div className="card-body p-4">
                                  <div className="text-left">                            
                                      <h6>Name: </h6>
                                      <sup>{data.taskname}</sup>
                                      <h6>Description: </h6>
                                      {data.taskdesc}
                                      <Form.Group className="mb-1">
                                            <Form.Label><h6>Status: </h6></Form.Label>
                                                <Form.Select defaultValue={data.status} onChange={(e)=>setStatus(e.target.value)}>
                                                <option value="ncom">Not Completed</option>
                                                <option value="com">Completed</option>
                                                </Form.Select>
                                        </Form.Group>
                                  </div>
                                </div>
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <Button variant='info'>Edit</Button>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Button variant='danger' onClick={()=>deleteTask(data.taskid)}>Delete</Button>
                              </div>
                          </div>
            </div>
    </>
}

export default Card
