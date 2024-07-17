import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button } from 'react-bootstrap';

function Taskhead() {
  return <>
  <br/>
  <br/>
  <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Task List</Navbar.Brand>
          <Form className="d-flex">
            <Form.Select aria-label="Status">
                <option>Filter Status</option>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not">Not Completed</option>
            </Form.Select>
          </Form>
        </Container>
  </Navbar>
  </>
}

export default Taskhead
