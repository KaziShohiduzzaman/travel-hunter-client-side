import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ event }) => {
    const { _id, name, img, description } = event;
    return (
        <div>
            <Col>
                <Card className='shadow card-hover'>
                    <Card.Img variant="top" src={img} className='img-fluid img-size' />
                    <Card.Body>
                        <Card.Title className='text-center text-decoration-underline color-text'>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 200)}
                        </Card.Text>
                        <Link className='text-decoration-none' to={`/booking/${_id}`}>
                            <button className='card-button'>Book Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;