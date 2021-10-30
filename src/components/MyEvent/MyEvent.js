import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyTour from '../MyTour/MyTour';
import './MyEvent.css'
const MyEvent = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [matchEvents, setMatchEvents] = useState([]);

    useEffect(() => {
        <Spinner animation="border" />;
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    useEffect(() => {
        setMatchEvents(events.filter(event => event.userEmail === user?.email))
    }, [events])

    //Delete tour
    const handleDeleteTour = id => {
        const proceed = window.confirm('Are you sure Want to delete');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Cancel Plan Successfully');
                        const remainingUser = events.filter(orders => orders._id !== id);
                        setEvents(remainingUser);
                    }
                })
        }
    }

    return (
        <div className="container">
            <h1 class="text-center p-4 text-color-services mb-3">Your Selected Event</h1>
            {matchEvents.length ?
                <Row xs={1} md={3} lg={3} className='gy-4 my-4'>
                    {matchEvents.map(event => <MyTour key={event._key} event={event} handleDeleteTour={handleDeleteTour}></MyTour>)}
                </Row>
                :
                <h3 className="text-danger text-center">Opps!! You have not
                    <br />

                    registered single Travel Plan yet </h3>
            }

        </div>
    );
};

export default MyEvent;