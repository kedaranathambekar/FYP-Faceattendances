import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [team, setTeam] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      alert('Please upload an image.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;

     
      try {
        const response = await fetch('http://127.0.0.1:5000/add-employee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstName, lastName,department, team, image: base64Image })
        });

        const result = await response.json();
        if (result.success) {
          alert('Employee added successfully');
          
          setFirstName('');
          setLastName('');
          setDepartment('');
          setTeam('');
          setImage(null);
        } else {
          alert('Failed to add employee');
        }
      } catch (error) {
        console.error('Error adding employee:', error);
        alert('Error adding employee');
      }
    };
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleListEmployees = () => {
    navigate('/list-employees');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
         <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
          required
        />
        <input
          type="text"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          placeholder="Team"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
        <button type="submit">Add Employee</button>
      </form>
      <button onClick={handleListEmployees}>List Employees</button>
    </div>
  );
}

export default AddEmployee;
