import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MatchedProfiles({ currentUser }) {
  const [matchedProfiles, setMatchedProfiles] = useState([]);

  useEffect(() => {
    const fetchMatchedProfiles = async () => {
      try {
        const response = await axios.post('https://localhost:44375/api/Test/GetMatchedProfiles', {
          currentUser
        });

        setMatchedProfiles(response.data.userData); // Access userData property
      } catch (error) {
        console.error('Error fetching matched profiles:', error);
      }
    };

    fetchMatchedProfiles();
  }, [currentUser]);

  return (
    <div>
      <h2>Matched Profiles</h2>
      {matchedProfiles.length > 0 ? (
        <ul>
          {matchedProfiles.map((profile) => (
            <li key={profile.CustomerName}>
              <p>Name: {profile.CustomerName}</p>
              <p>Phone No: {profile.PhoneNo}</p>
              <p>Address: {profile.Address}</p>
              <p>Pet Name: {profile.PetName}</p>
              <p>Pet Gender: {profile.PetGender}</p>
              <p>Breed: {profile.Breed}</p>
              <p>Pet Age: {profile.Age}</p>
              <p>Health Status: {profile.health_status}</p>
              <p>Description: {profile.description}</p>
              {/* Add other properties as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No matched profiles found.</p>
      )}
    </div>
  );
}

export default MatchedProfiles;