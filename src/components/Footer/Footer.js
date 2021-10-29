import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import logo2 from '../../images/logo.png'
const Footer = () => {
    return (
        <div className='footer-bg'>
            <Row>
                <Col xs={12} md={4}>
                    <div className='footer-section'>
                        <img className='img-fluid img-sized' src={logo2} alt="" />
                        <p>All locations are open. Please come in at your actual appointment time. According to the latest from NYS and the CDC, masks are mandatory in the building & during exam. If you are a current patient and have an emergency, doctors are available 24/7.
                            Simply call 585-394-2020.</p>
                    </div>

                </Col>
                <Col xs={12} md={4}>
                    <div className='footer-section'>
                        <h2 className='fw-bold'>Contact us</h2>
                        <p> <i class="fas fa-map-marker icon-color me-2"></i> 04360, NewYork, 33 Matehouse str., 12/4</p>
                        <p><i class="fas fa-phone-alt icon-color me-2"></i> 803-33-5644-99</p>
                        <p><i class="fas fa-envelope icon-color me-2"></i> admin@doremischool.net</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className='footer-section'>
                        <h2>important Links</h2>
                        <div>
                            <a className='d-block footer-link' href="/"><i class="fab fa-facebook-square icon-color me-2"></i> Connect with Facebook</a>
                            <a className='d-block footer-link' href="/"><i class="fab fa-instagram icon-color me-2"></i> Connect with instagram</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{ backgroundColor: '#622CED' }} className='py-3 text-white text-center'>
                <p className='text-white mt-2'>All credit goes to <span className='text-white'>Kazi Shohiduzzaman</span></p>
            </div>

        </div>
    );
};

export default Footer;