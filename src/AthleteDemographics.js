import React from "react";
import { Card, Row} from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import './App.css'; 

const Demographics = ({athletes, athlete}) => {
    let foundathlete = 0 || null;
    for (let index = 0; index < athletes.length; index++) {
        if (athletes[index].fullname === athlete) {
            foundathlete = index;
        }
    }

    return(
        <div>
                <Card>
                    <Card.Header className="fs1">
                        <Card.Title>{athlete}'s Demographics</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="text-justify">
                                        <b>First Name: </b>{athletes && athletes[foundathlete].firstname}
                                        <span className="spacing"></span>
                                        <b>Middle Name: </b>{athletes && athletes[foundathlete].middlename}
                                        <span className="spacing"></span>
                                        <b>Last Name: </b>{athletes && athletes[foundathlete].lastname}
                                        <span className="spacing"></span>
                                        <b>Suffix: </b>{athletes && athletes[foundathlete].suffix}
                                        <span className="spacing"></span>
                                        <b>Nickname: </b>{athletes && athletes[foundathlete].nickname}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="text-justify">
                                        <b>Phone: </b>{athletes && athletes[foundathlete].phone}
                                        <span className="spacing"></span>
                                        <b>Email: </b>{athletes && athletes[foundathlete].email}
                                        <span className="spacing"></span>
                                        <b>Address: </b>{athletes && athletes[foundathlete].address}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="text-justify">
                                        <b>Oxy ID: </b>{athletes && athletes[foundathlete].oxyid}
                                        <span className="spacing"></span>
                                        <b>Class: </b>{athletes && athletes[foundathlete].class}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="text-justify">
                                        <b>Allergies: </b>
                                        {athletes[foundathlete].allergies.map((allergy,index)=>(
                                            <span>{athletes[foundathlete].allergies[index]}...</span>
                                        ))}
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="text-justify">
                                        <b>Medical: </b>
                                        {athletes[foundathlete].medical.map((med,index)=>(
                                            <span>{athletes[foundathlete].medical[index]}...</span>
                                        ))}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
    );
}

export default Demographics;