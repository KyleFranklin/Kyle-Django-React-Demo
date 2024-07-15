import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import axios from 'axios';
import '../components/RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Initialize with empty string for specific error handling
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', { username, password });
      console.log(response.data); // Assuming your API returns some data upon successful registration

      setError(''); // Clear any previous errors
      
      // Optionally, you can redirect the user after successful registration
      navigate('/login'); // Redirect to the login page after registration
    } catch (error) {
      setError('Registration failed'); // Handle registration failure
    }
  };

  const handleGoBack = () => {
    navigate('/login'); // Navigate back to the login page
  };

  return (
    <div className="RegisterPageContainer">
      <PageTitle />
      <form className="RegisterForm">
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
          <button type="button" className="registerButton" onClick={handleGoBack}>Go Back</button>
          <button type="button" className="submitButton" onClick={handleRegister}>Register</button>
        </div>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default RegisterPage;
