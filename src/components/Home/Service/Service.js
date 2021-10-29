import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = ({ event }) => {
    const { name, img, description } = event;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;