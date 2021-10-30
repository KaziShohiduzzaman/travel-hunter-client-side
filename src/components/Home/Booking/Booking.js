import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import useAuth from '../../../Hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';

const Booking = () => {
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const { serviceId } = useParams();
    const refUserName = useRef('')
    const refEmail = useRef('')
    const [aTour, setaTour] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/events/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [serviceId])
    console.log(event);

    const handlePersonChange = e => {
        const updatePerson = e.target.value;
        const updateEvent = { ...aTour };
        updateEvent.eventPerson = updatePerson;
        setaTour(updateEvent)
    }
    const handlePhoneNumberChange = e => {
        const updatePhone = e.target.value;
        const updateEvent = { ...aTour };
        updateEvent.eventPhone = updatePhone;
        setaTour(updateEvent)
    }
    const handleDurationChange = e => {
        const updateDuration = e.target.value;
        const updateEvent = { ...aTour };
        updateEvent.eventDuration = updateDuration;
        setaTour(updateEvent)
    }

    const handleSubmit = e => {
        aTour.userName = refUserName.current.value;
        aTour.userEmail = refEmail.current.value;
        aTour.placeName = event?.name;
        aTour.status = 'pending';
        console.log(aTour);




        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(aTour)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Registration successful");
                    setEvent({});
                    e.target.reset();
                }
            })
        e.preventDefault();
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
                            <form onSubmit={handleSubmit}>
                                <input ref={refUserName} type="text" name="" id="" placeholder="Name" value={user.displayName || ''} />
                                <input ref={refEmail} type="email" name="" id="" placeholder='Email' value={user.email || ''} />
                                <input onChange={handlePersonChange} type="number" name="" id="" placeholder='Total Person' />
                                <input onChange={handlePhoneNumberChange} type="number" name="" id="" placeholder='Phone Number' />
                                <input onChange={handleDurationChange} type="number" name="" id="" placeholder='Travel Duration' />
                                <input type="submit" value="Register" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;

{/* <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='input-place' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' value={user?.displayName || ''} />

                                <input className='input-place' {...register("email")} placeholder='Email' value={user?.email || ''} />

                                <input className='input-place' type="number" {...register("totalPerson")} placeholder='Total Person' />

                                <input className='input-place' type="number" {...register("phoneNumber")} placeholder='Phone No' />

                                <input className='input-place'  type="number" {...register("duration")} placeholder='Travel Duration' />

                                <input className='input-place btn-submit' type="submit" />
                            </form> */}