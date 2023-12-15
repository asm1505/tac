import React from "react";
import { Button, Col, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import injurylist from "./ListofBodyParts.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Rehab = ({athletes, athlete}) => {
    let foundathlete = 0 || null;

    for (let index = 0; index < athletes.length; index++) {
        if (athletes[index].fullname === athlete) {
            foundathlete = index;
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState('');

    const [inpDate, setInpDate] = useState(new Date());

    function handleSelect(event){
        setValue(event.target.value);
    }
    return(
        <div>
            <Card>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Link</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={6}>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-warning" size="md" onClick={handleShow}>
                                            <b>Add Rehab</b>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                            {athletes[foundathlete].rehab.map((rhb,index)=>(
                                <tr>
                                    <td>{athletes[foundathlete].rehab[index].inpdate}</td>
                                    <td>{athletes[foundathlete].rehab[index].link}</td>
                                    <td>{athletes[foundathlete].rehab[index].notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>New Rehab</Modal.Title>
                </Modal.Header>
                <Form>
                <Modal.Body>
                <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="athletenamerform">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder={athlete} readOnly />
                                </Form.Group>
                            </Col>  
                            <Col>
                                <Form.Group className="mb-3" controlId="trainernamerform">
                                    <Form.Label for="trainer">Trainer</Form.Label>
                                    <Form.Control type="text" placeholder="Oswald Tiger" readOnly name="trainer" id="trainer"/>
                                </Form.Group>
                            </Col>     
                        </Row>
                        <Form.Group className="mb-3" controlId="injdate">
                                    <Form.Label>Date</Form.Label>
                                    <DatePicker showIcon selected={inpDate} onChange={(date) => setInpDate(date)} value={inpDate} name="inpdate" id="inpdate"/>
                                </Form.Group>
                        <Form.Group className="mb-3" controlId="linkform">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" placeholder="Link" name="link" id="link"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="notesrform">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows={3} name="notes" id="notes"/>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default Rehab;