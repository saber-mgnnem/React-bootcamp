import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Style.css'
function AjouterEvent() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    date: '',
    image: '' // Added image state


  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const addEvent = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/Event', values)
      .then(res => {
        console.log(res);
        navigate('/event');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="dby">
      <div className=" wrapper">
        <h1>Add Event</h1>
        <form onSubmit={addEvent}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={values.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={values.price}
            onChange={handleChange}
            required
          />
        
        <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={values.location}
            onChange={handleChange}
            required
          />
            <input
            type="text"
            name="image"
            placeholder="Url Image"
            value={values.image}
            onChange={handleChange}
            required
          />
          
          <button type="submit">ajoute Event</button>
        </form>
      </div>
    </div>
  );
}

export default AjouterEvent;
