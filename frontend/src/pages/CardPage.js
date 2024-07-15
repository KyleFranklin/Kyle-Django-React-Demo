import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/CardPage.css'; // Ensure this path is correct
import PageTitle from '../components/PageTitle';

const CardPage = () => {
  return (
    <div className="CardPageContainer">
      <PageTitle />
      <LoggedInName />
    </div>
  );
};

function LoggedInName() {
  const navigate = useNavigate();

  const doLogout = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/logout/', {});
      console.log(response.data); // Assuming your API returns some data upon successful logout

      // Redirect to login page after successful logout
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout failure if needed
    }
  };

  return (
    <div id="loggedInDiv">
      <button 
        type="button" 
        id="logoutButton" 
        className="buttons" // Ensure proper class or styling here
        onClick={doLogout}
      >
        Log Out
      </button>
    </div>
  );
}

export default CardPage;
