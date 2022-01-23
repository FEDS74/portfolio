import React from 'react'
import {Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';
import ImageOne from '../Images/lightscape-LtnPejWDSAY-unsplash.jpg';

import './Work.css';

export const Work = () => (
    <div>
        <section className='work' id='work'>
            <div className='section-title'>
                <h2>Work</h2>
            </div>
            <Container className='d-flex justify-content-between flex-wrap-wrap mt-5 card-flex m-auto mb-4 align-items-center'>
                <Card style={{
                        width: '18rem'
                    }}>
                    <Card.Img variant="top" src={ImageOne}/>
                    <Card.Body>
                        <Card.Title>Work one</Card.Title>
                        <Card.Text>
                            Caption of work to be displayed.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{
                        width: '18rem'
                    }}>
                    <Card.Img variant="top" src={ImageOne}/>
                    <Card.Body>
                        <Card.Title>Work one</Card.Title>
                        <Card.Text>
                            Caption of work to be displayed.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{
                        width: '18rem'
                    }}>
                    <Card.Img variant="top" src={ImageOne}/>
                    <Card.Body>
                        <Card.Title>Work one</Card.Title>
                        <Card.Text>
                            Caption of work to be displayed.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    </div>
)