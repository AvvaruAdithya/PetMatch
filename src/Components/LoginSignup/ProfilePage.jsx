// ProfilePage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the server after the component mounts
    const fetchUserData = async () => {
      try {
        // Assuming you have an authentication token stored in localStorage
        const authToken = localStorage.getItem('authToken');

        // Make a GET request to the server to fetch user profile
        const response = await axios.get('https://localhost:44345/api/Test/Profile', {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the authentication token in the headers
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Your Profile</h2>
      {userData ? (
        <div>
          <p>Name: {userData.CustomerName}</p>
          <p>Phone Number: {userData.PhoneNo}</p>
          <p>Address: {userData.Address}</p>
          <p>Pet Name: {userData.PetName}</p>
          <p>Pet Gender: {userData.Petgender}</p>
          <p>Pet Age: {userData.PetAge}</p>
          <p>Breed: {userData.breed}</p>
          <p>Health Status: {userData.health_status}</p>
          <p>Description: {userData.description}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
