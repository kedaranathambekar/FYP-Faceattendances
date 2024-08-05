import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile({ userId }) {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/user/${userId}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/update-profile', {
        userId,
        updateFields: profile,
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {editMode ? (
        <div>
          <input
            type="text"
            name="firstName"
            value={profile.firstName || ''}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={profile.lastName || ''}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={profile.email || ''}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
