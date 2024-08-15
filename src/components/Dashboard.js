import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const username = localStorage.getItem('username'); 
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };
  const handleListEmployees = () => {
    navigate('/list-employees');
  };
  const handleRecordinEmployees = () => {
    navigate('/records');
  };
  const handleRecordoutEmployees = () => {
    navigate('/recordsout');
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard, {username}! This is a protected page accessible only after successful login.</p>
      <button onClick={handleAddEmployee} className="button">Add Employee</button>
      <button onClick={handleListEmployees} className="button">ListEmployees</button>
      <button onClick={handleRecordinEmployees} className="button">RecordIn</button>
      <button onClick={handleRecordoutEmployees} className="button">RecordOut</button>
    </div>
  );
}

export default Dashboard;


