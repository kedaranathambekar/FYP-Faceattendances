import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [team, setTeam] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const navigate = useNavigate();

  const fetchEmployee = useCallback(async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/employee/${id}`);
      const data = await response.json();
      setEmployee(data);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setDepartment(data.department);
      setTeam(data.team);
      setEmployeeId(data.employeeId); 
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedEmployee = {
      firstName,
      lastName,
      department,
      team,
      employeeId,
    };

    try {
      const response = await fetch(`http://127.0.0.1:5000/update-employee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployee),
      });

      const result = await response.json();
      if (result.success) {
        
        navigate('/list-employees');
      } else {
        alert('Failed to update employee');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Error updating employee');
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
      <p>EmployeeId:
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Employee ID"
          required
        />
        </p>
        <p>FirstName:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        </p>
        <p>LastName:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        </p>
        <p>Department:
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
          required
        />
        </p>
        <p>Team:
        <input
          type="text"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          placeholder="Team"
          required
        />
        </p>
        <button type="submit" className="update-btn">Update Employee</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
