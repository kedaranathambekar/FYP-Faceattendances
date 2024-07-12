import React, { useState, useEffect } from 'react';

function ListEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete-employee/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (result.success) {
        setEmployees(employees.filter(employee => employee.id !== id));
      } else {
        alert('Failed to delete employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Error deleting employee');
    }
  };
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName}
            {/* <img src={employee.imageUrl} alt={`${employee.firstName} ${employee.lastName}`} width="100" /> */}
          <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListEmployees;
