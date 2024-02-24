import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css'

function Register() {
    const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    mail: '',
    password: '',
    role: "user",
    phone: '',
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const addUser = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', values)
      .then(res => {
        console.log(res);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };
        
  return (
    <div className="dby">
    <div className=" wrapper">
      <h1>cree un compte</h1>
      <form onSubmit={addUser}>
      <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      <input
        type="text"
        name="phone"
        placeholder="Telephone"
        value={values.phone}
        onChange={handleChange}
        required
      />
        <input
          type="mail"
          name="mail"
          placeholder="Mail"
          value={values.mail}
          onChange={handleChange}
          required
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            required
          />
        
        
        <button type="submit">Register</button>

      </form>
    
    </div>
  </div>  )
}

export default Register