import React from 'react';
import RecentAthleteTable from './TDRecentAthleteTable';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function TrainerDashboard ({jsondata}){
    return(
        <div>
            <Row xs={1} md={2} className="g-4">
                <RecentAthleteTable athlete={jsondata}/>
                <Card>
                    <Card.Body>
                        <Card.Title>Athlete Search</Card.Title>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default TrainerDashboard;