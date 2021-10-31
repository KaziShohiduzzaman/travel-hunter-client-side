import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://lit-cove-75583.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    })

    return (
        <div className='container my-4 w-100'>
            {   //for spinner
                events.length === 0 ?
                    <Spinner className='d-block mx-auto my-4' animation="border" variant="danger" />
                    :
                    <div>
                        <p className='text-center p-4 text-color-services'>Available Tour</p>
                        <Row xs={1} md={3} className="g-4">
                            {
                                events.map(event => <Service key={event._id} event={event}></Service>)
                            }
                        </Row>
                    </div>
            }

        </div>
    );
};

export default Services;