import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './Style.css';

function Update() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [Event, setEvent] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        date: '',
        image: '' // Initialize image as an empty string
    });

    useEffect(() => {
        axios.delete(`http://localhost:3000/Event/${id}`)
            .then(res => setEvent(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...Event,
            [name]: value
        });
    };

    const updateEvent = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/Event/${id}`, Event) // Use PUT for updating existing data
            .then(res => {
                navigate('/event');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="dby">
            <div className="wrapper">
                <h1>Update Event</h1>
                <form onSubmit={updateEvent}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={Event.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={Event.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={Event.price}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={Event.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={Event.location}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Url Image"
                        value={Event.image}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Update Event</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
