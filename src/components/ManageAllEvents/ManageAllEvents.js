import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import AllEvent from '../AllEvent/AllEvent';
import './ManageAllEvents.css'
const ManageAllEvents = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(result => setOrders(result))
    }, [])
    //delete or cancel a tour
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
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                })
        }
    }
    return (
        <div className='container my-4'>
            <div>
                <h1 className='text-center p-4 text-color-services'>Manage All Plans</h1>
                {
                    orders.length ?
                        <Row xs={1} md={2} className="g-4 my-3">
                            {
                                orders.map(order => <AllEvent key={order._id} order={order} handleDeleteTour={handleDeleteTour}></AllEvent>)
                            }
                        </Row>
                        :
                        <h3 className="text-danger text-center">Opps!! You have not
                            <br />

                            registered single Travel Plan yet </h3>
                }

            </div>
        </div>

    )
};

export default ManageAllEvents;