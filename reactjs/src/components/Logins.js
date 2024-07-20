import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';

function Logins() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle login authentication
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Assuming login is successful, redirect to Home
    history.push('/home');
  };

  return (
    <div className="login-container">
      <h2>Login to Pharmacy Sales Management System</h2>
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
      {/* Simple link to SignUp component */} 
      Don't have an account? <a href="/signup">Sign Up</a>
    </div>
  );
}

export default Logins;
