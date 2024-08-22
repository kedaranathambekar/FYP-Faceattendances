import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const username = localStorage.getItem('username'); 
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };
  const handleRegisterEmployee = () => {
    navigate('/register');
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
      <p>Welcome, {username}! Let store Employee information in the company.</p>
      <button onClick={handleAddEmployee} className="button">Add Employee</button>
      <button onClick={handleListEmployees} className="button">ListEmployees</button>
      <button onClick={handleRecordinEmployees} className="button">RecordIn</button>
      <button onClick={handleRecordoutEmployees} className="button">RecordOut</button>
      <button onClick={handleRegisterEmployee} className="button">Register</button>
    </div>
  );
}

export default Dashboard;


