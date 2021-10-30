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
            <h2 className='text-center p-4 text-color-services'>Add a visit place name</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="input-main my-4">
                <input className='inputStyle' {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Place Name" />

                <textarea className='textarea-input' {...register("description")} placeholder="Short Description" />

                <input className='inputStyle' {...register("img")} placeholder='Img Link' />

                <input className='inputStyle submit-btn' type="Submit" />
            </form>
        </div>
    );
};

export default AddTour;