import React from "react";
import JaneDoeRehab from "./AthleteRehab";
import {Container, Row } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import { Nav } from "react-bootstrap";
import Demographics from "./AthleteDemographics";
import Injuries from "./AthleteInjuries";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const Profile = ({jsondata}) =>{	
	let athletename = window.location.pathname.slice(1).replace('%20'," ");
	return(
		<div>
			<Card className="colors3" style={{marginLeft:0,marginRight:0, height: "92.80vh"}}>
				<Card.Body>
					<Tab.Container id="profile-tabs" defaultActiveKey="demographics">
						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="demographics">
											<b className="colors">Demographics</b>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="injuries">
											<b className="colors">Injuries</b>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="rehab">
											<b className="colors">Rehab</b>
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
									<Tab.Pane eventKey="demographics">
										<Container>
											<Demographics athletes={jsondata} athlete={athletename}/>
										</Container>
									</Tab.Pane>
									<Tab.Pane eventKey="injuries">
										<Container>
											<Injuries athletes={jsondata} athlete={athletename}/>
										</Container>
									</Tab.Pane>
									<Tab.Pane eventKey="rehab">
										<Container>
											<JaneDoeRehab athletes={jsondata} athlete={athletename}/>
										</Container>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Profile;