import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Review.css'
const Review = () => {
    return (
        <div>
            <div className='w-100 my-4 p-5'>
                <p className='text-center p-4 text-color-services'>Testimonials</p>
                <h1 className='text-center'>What Our Traveller Say About Us</h1>
                <div>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='shadow-lg p-4 bg-About rounded'>
                                <div className='test-main'>
                                    <img className='img-fluid test-img' src="https://smallbiography.com/wp-content/uploads/2021/06/solaiman-shukhon.jpg" alt="" />
                                    <div>
                                        <h4 className='name-style'>Solaiman Shukhon</h4>
                                        <small className="text-white">Motivational Speaker</small>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-3 text-white'>Good maintainence of rooms. Nice geusture by nursing staff. Overall had a very good experience and feel at home. Good job. Cheers..!</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='mt-3'>
                            <div className='shadow-lg p-4 bg-About rounded'>
                                <div className='test-main'>
                                    <img className='img-fluid test-img' src="https://aymansadiq.com/img/ayman.jpg" alt="" />
                                    <div>
                                        <h4 className='name-style'>Ayman Sadik</h4>
                                        <small className="text-white">Youtuber</small>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-3 text-white'>Hospital is maintained excellently. No problems for Visitor. Thanks to Founder his team for giving greatest service to the visitors.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Review;