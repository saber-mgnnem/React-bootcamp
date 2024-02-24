import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/users');
      const usersData = response.data;
      
      const user = usersData.find(u => u.mail === email && u.password === password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
        window.location.reload();
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Failed to log in. Please try again later.');
    }
  };
  

  return (
          <div className="dby">
      <div className=" wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            <input
            type="password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit">Login</button>
          {error && <p className="text-danger">{error}</p>}

        </form>
       
      </div>
    </div>
    
  );
}

export default Login;
