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

const Injuries = ({athletes, athlete}) => {
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

    const [injDate, setInjDate] = useState(new Date());
    const [rptDate, setRptDate] = useState(new Date());

    let injurylistindex = 0;

    function findInjuryIndex(value){
        for (let i = 0; i < injurylist.length; i++) {
            if (injurylist[i].bodypart === value) {
                injurylistindex = i;
            }
        }
    }

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
                                <th>Injury Date</th>
                                <th>Side</th>
                                <th>Body Part</th>
                                <th>Injury</th>
                                <th>Status</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={6}>
                                    <div className="d-grid gap-2">
                                        <Button variant="outline-warning" size="md" onClick={handleShow}>
                                            <b>Add Injury</b>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                            {athletes[foundathlete].injuries.map((injury,index)=>(
                                <tr>
                                    <td>{athletes[foundathlete].injuries[index].injdate}</td>
                                    <td>{athletes[foundathlete].injuries[index].side}</td>
                                    <td>{athletes[foundathlete].injuries[index].bodypart}</td>
                                    <td>{athletes[foundathlete].injuries[index].injury}</td>
                                    <td>{athletes[foundathlete].injuries[index].status}</td>
                                    <td>{athletes[foundathlete].injuries[index].notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>New Injury</Modal.Title>
                </Modal.Header>
                <Form>
                <Modal.Body>
                <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="athletenameform">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder={athlete} readOnly />
                                </Form.Group>
                            </Col>  
                            <Col>
                                <Form.Group className="mb-3" controlId="trainernameform">
                                    <Form.Label for="trainer">Trainer</Form.Label>
                                    <Form.Control type="text" placeholder="Oswald Tiger" readOnly name="trainer" id="trainer"/>
                                </Form.Group>
                            </Col>     
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="teamform">
                                    <Form.Label for="team">Team</Form.Label>
                                    <Form.Control as="select" name="team" id="team">
                                        {athletes[foundathlete].teams.map((team,index) => (
                                            <option>{athletes[foundathlete].teams[index]}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="duringform">
                                    <Form.Label for="during">During</Form.Label>
                                    <Form.Control as="select" name="during" id="during">
                                        <option value="Practice">Practice</option>
                                        <option value="Game">Game</option>
                                        <option value="Lift">Lift</option>
                                        <option value="Conditioning">Conditioning</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="bodypartform">
                                <Form.Label for="bodypart">Body Part</Form.Label>
                                    <Form.Control as="select" value={value} onChange={handleSelect} name="bodypart" id="bodypart" >
                                            <option>Select Body Part</option>
                                            {injurylist.map((part) => (
                                                <option>{part.bodypart}</option>
                                            ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="bpinjuryform">
                                    <Form.Label for="injury">Injury</Form.Label>
                                    <Form.Control as="select" onBeforeInput={findInjuryIndex(value)} name="injury" id="injury">
                                            <option>Select Injury</option>
                                            {injurylist[injurylistindex].bpinjuries.map((inj,index)=>(
                                                <option>{injurylist[injurylistindex].bpinjuries[index]}</option>
                                            ))} 
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="sideform">
                                    <Form.Label for="side">Side?</Form.Label>
                                    <Form.Check type="radio" aria-label="radio 1" inline label="L" name="side" value="Left" id="side"/>
                                    <Form.Check type="radio" aria-label="radio 1" inline label="R" name="side" value="Right" id="side"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="injdate">
                                    <Form.Label>Injury Date</Form.Label>
                                    <DatePicker showIcon selected={injDate} onChange={(date) => setInjDate(date)} value={injDate} name="injdate" id="injdate"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="rptdate">
                                    <Form.Label>Report Date</Form.Label>
                                    <DatePicker name="rptdate" id="rptdate" showIcon selected={rptDate} onChange={(date) => setRptDate(date)} value={rptDate}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="reinj">
                                    <Form.Check aria-label="option 1" inline label="Reinjury?" name="reinjury" id="reinjury" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="ems">
                                    <Form.Check aria-label="option 1" inline label="EMS?" name="emsrequired" id="emsrequired"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="athletenameform">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="Status" name="status" id="status"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="notesform">
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

export default Injuries;