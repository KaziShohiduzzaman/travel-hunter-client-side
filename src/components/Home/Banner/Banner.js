import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner1.png';
import banner2 from '../../../images/banner2.png';
import banner3 from '../../../images/banner3.png'
const Banner = () => {
    return (
        <div className='w-100'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={banner3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-style'><strong>“Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</strong>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-style'>“I am not the same, having seen the moon shine on the other side of the world” – Mary Anne Radmacher
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-style'>“There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them” – Jo Walton
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;