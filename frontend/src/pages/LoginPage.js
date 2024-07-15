import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import axios from 'axios';
import '../components/LoginPage.css'; // Adjust the path if necessary

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(''); // Initialize with empty string for specific error handling
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });
      console.log(response.data); // Assuming your API returns some data upon successful login

      setIsLoggedIn(true);
      setError(''); // Clear any previous errors
      
      // Navigate to the "cards" page
      navigate('/cards');
    } catch (error) {
      setIsLoggedIn(false);
      setError('Incorrect login or password'); // Set specific error message for invalid login
    }
  };

  const handleRegister = () => {
    // Implement registration logic or navigate to registration page
    navigate('/register');
  };

  return (
    <div className="LoginPageContainer">
      <PageTitle />
      <form className="LoginForm" onSubmit={handleLogin}>
        <input
          type="text"
          className="inputField"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="inputField"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttonContainer">
          <button type="submit" className="submitButton">Sign In</button>
          <button type="button" className="registerButton" onClick={handleRegister}>Register</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default LoginPage;
