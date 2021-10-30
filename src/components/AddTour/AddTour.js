import React from 'react';
import './AddTour.css'
import { useForm } from "react-hook-form";


const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Add a Tour successfully");
                    reset();
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='input-place' {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Place Name" />

                <textarea className='input-place' {...register("description")} placeholder="Short Description" />

                <input className='input-place' {...register("img")} placeholder='Img Link' />

                <input type="Submit" />
            </form>
        </div>
    );
};

export default AddTour;