import React from 'react';
import './NotFound.css'
import notFound from '../../images/404-Page.gif'
const NotFound = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;