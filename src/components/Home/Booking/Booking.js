import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../Hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';

const Booking = () => {
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/events/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [serviceId])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container'>
            <h1 className='text-center p-4 text-color-services'>{event.name}</h1>
            <img className='img-fluid d-block mx-auto my-5' src={event.img} alt="" />
            <p className='header-text-booking'><span>About {event.name}:</span> {event.description}</p>

            <Container>

                <Row>
                    <Col xs={12} md={6} className='my-4'>
                        <img className='img-fluid mt-5' src="https://www.travelinglifestyle.net/wp-content/uploads/2017/02/travel-qoute-age-is-no-barrier-when-it-comes-to-travel.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={6} className='my-4'>
                        <div>
                            <h3 className='text-center p-4 text-color-services'>Registration</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='input-place' defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                                <input className='input-place' defaultValue={user.email} {...register("email")} placeholder='Email' />
                                <input className='input-place' defaultValue={event.name} {...register("place")} placeholder='Visiting Place' />
                                <input className='input-place' defaultValue="" type="number" {...register("totalPerson")} placeholder='Total Person' />
                                <input className='input-place' defaultValue="" type="number" {...register("phoneNumber")} placeholder='Phone No' />
                                <input className='input-place' defaultValue="" type="number" {...register("duration")} placeholder='Travel Duration' />
                                <input className='input-place btn-submit' type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;