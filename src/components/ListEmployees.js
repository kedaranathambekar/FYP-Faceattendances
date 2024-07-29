import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete-employee/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        alert('Employee deleted successfully');
        fetchEmployees();
      } else {
        alert('Failed to delete employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Error deleting employee');
    }
  };
  const handleUpdate = (id) => {
        navigate(`/update-employee/${id}`);
      };

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Photo</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Department</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeId}</td>
              <td><img src={employee.imageUrl} alt={employee.firstName} /></td>
              <td>{employee.firstName}</td> <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>{employee.team}</td>
              <td>
              <button onClick={() => handleUpdate(employee.id)} className="update-btn">Update</button>
              
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployees;

