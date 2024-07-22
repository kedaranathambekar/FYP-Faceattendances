import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [team, setTeam] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the employee details
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/employees/${id}`);
        const data = await response.json();
        setEmployee(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setDepartment(data.department);
        setTeam(data.team);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/update-employee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, department, team })
      });

      const result = await response.json();
      if (result.success) {
        alert('Employee updated successfully');
        navigate('/list-employees');
      } else {
        alert('Failed to update employee');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Error updating employee');
    }
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Update Employee</h2>
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
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
