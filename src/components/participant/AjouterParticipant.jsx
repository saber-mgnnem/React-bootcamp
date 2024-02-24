import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css'
import { useParams} from 'react-router-dom'
function AjouterParticipant() {
  const {id} = useParams();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    event: id,
    name: '',
    email: '',
    paymentStatus: "pending",
    phone: '' 


  });
 
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const Participe = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/Participant', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="dby">
      <div className=" wrapper">
        <h1>Add Event</h1>
        <form onSubmit={Participe}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            required
          />
            <input
            type="text"
            name="phone"
            placeholder="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Participe</button>
        </form>
      </div>
    </div>
  );
}

export default AjouterParticipant;
