import React, { useState } from 'react';
import './login.css';

function Logins() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8088/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Login successful');
      window.location.href = '/home';
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Pharmacy Sales Records System</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      Don't have an account? <a href="/signup">Sign Up</a>
    </div>
  );
}

export default Logins;
