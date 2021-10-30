import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './AllEvent.css'
const AllEvent = (props) => {
    const { _id, placeName, eventPerson, eventPhone, eventDuration, userName, userEmail, status } = props.order;

    console.log(props);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Tour Place: {placeName}</Card.Title>
                        <p>Purchase By: {userName}</p>
                        <p>Email : {userEmail}</p>
                        <p>Total Person : {eventPerson}</p>
                        <p>Tour Duration : {eventDuration} days</p>
                        <p>Status: {status}</p>
                        <p>Phone Number: {eventPhone}</p>
                        <button onClick={() => props.handleDeleteTour(_id)} className='card-button cancel-button'>Cancel Tour</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllEvent;
