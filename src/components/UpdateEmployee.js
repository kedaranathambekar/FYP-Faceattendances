
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/employee/${id}`);
        const data = await response.json();
        setEmployee(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Department"
          required
        />
        <input
          type="text"
          name="team"
          value={employee.team}
          onChange={handleChange}
          placeholder="Team"
          required
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
