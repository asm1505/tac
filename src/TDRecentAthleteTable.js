import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function RecentAthleteTable({athlete}){
  return (
    <Card>
        <Card.Body>
          <Card.Title>Recently Viewed Athletes</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Athlete</th>
              </tr>
            </thead>
            <tbody>
              {athlete.map((recent) => (
                <tr>
                  <td>
                    <Nav.Link as={Link} to={'/' + recent.fullname}>
                      {recent.fullname}
                    </Nav.Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
  );
}

export default RecentAthleteTable;