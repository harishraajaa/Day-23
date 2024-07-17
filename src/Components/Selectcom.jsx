import Dropdown from 'react-bootstrap/Dropdown';

export default function Selectcom({ status, setStatus }) {
    return <>
        {/* <Form.Group className="mb-1">
            <Form.Label><h6>Status: </h6></Form.Label>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="ncom">Not Completed</option>
                <option value="com">Completed</option>
            </Form.Select>
        </Form.Group> */}
    {/* <Dropdown>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="ncom">Not Completed</Dropdown.Item>
        <Dropdown.Item eventKey="com">Completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
        <select class="mb-1" onChange={(e)=>{se}}>
            <option value="ncom">Not Completed</option>
            <option value="com">Completed</option>
        </select>
    </>
}