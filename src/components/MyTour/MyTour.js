import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyTour = (props) => {
    const { _id, placeName, eventPerson, eventPhone, eventDuration, userName, userEmail } = props.event;

    return (
        <div>
            <Col>
                <Card className='shadow-lg'>
                    <Card.Body>
                        <Card.Title>Tour Place: {placeName}</Card.Title>
                        <p>Purchase By: {userName}</p>
                        <p>Email : {userEmail}</p>
                        <p>Total Person : {eventPerson}</p>
                        <p>Tour Duration : {eventDuration} days</p>
                        {/* <p>Status: {status}</p> */}
                        <p>Phone Number: {eventPhone}</p>
                        <button onClick={() => props.handleDeleteTour(_id)} className='card-button cancel-button'>Cancel Tour</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyTour;