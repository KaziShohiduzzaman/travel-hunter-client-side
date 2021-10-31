import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllEvent from '../AllEvent/AllEvent';
import './ManageAllEvents.css'
const ManageAllEvents = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch('https://lit-cove-75583.herokuapp.com/orders')
            .then(res => res.json())
            .then(result => setOrders(result))
    }, [status, orders])
    //delete or cancel a tour
    const handleDeleteTour = id => {
        const proceed = window.confirm('Are you sure Want to Cancel?');
        if (proceed) {
            const url = `https://lit-cove-75583.herokuapp.com/orders/${id}`;
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
    // Update status 
    const handleStatus = id => {
        setStatus(!status);
        const url = `https://lit-cove-75583.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status updated Successfully')
                }
                else {
                    alert('Already Approved')
                }
            })
    }
    return (
        <div className='container my-4'>
            <div>
                <h1 className='text-center p-4 text-color-services'>Manage All Plans</h1>
                {
                    orders.length ?
                        <Row xs={1} md={2} className="g-4 my-3">
                            {
                                orders.map(order => <AllEvent key={order._id} order={order} handleDeleteTour={handleDeleteTour} handleStatus={handleStatus}></AllEvent>)
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