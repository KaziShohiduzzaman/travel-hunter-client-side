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

    console.log(event);

    useEffect(() => {
        const url = `http://localhost:5000/events/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [serviceId])
    const preloadValues = {
        name: user?.displayName,
        email: user?.email,
        // place: event?.name,
    }

    const { register, handleSubmit, reset } = useForm({
        defaultValues: preloadValues
    });
    const onSubmit = data => {
        // const pname = event.name;
        data.tourPlace = event.name;
        data.status = "pending";
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Registration successful");
                    reset();
                }
            })
    };
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
                                {
                                    user?.email ?
                                        <input className='input-place' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' value={user?.displayName || ''} />
                                        :
                                        <input className='input-place' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' defaultValue="" />
                                }
                                {
                                    user?.email ?
                                        <input className='input-place' {...register("email")} placeholder='Email' value={user?.email || ''} />
                                        :
                                        <input className='input-place' {...register("email")} placeholder='Email' defaultValue="" />
                                }
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