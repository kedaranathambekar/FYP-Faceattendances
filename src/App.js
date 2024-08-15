import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import ListEmployees from './components/ListEmployees'; 
import ClockIn from './components/ClockIn'; 
import ClockOut from './components/ClockOut'; 
import UpdateEmployee from './components/UpdateEmployee';
import ClockInRecords from './components/ClockInRecords';
import ClockOutRecords from './components/ClockOutRecords';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="title">Face Recognition Attendance System</h1>
      <div className="content-sections">
        <div className="section">
          <h3>Overview</h3>
          <p>
            The Face Recognition Attendance System is designed to automate the process of tracking employee attendance.
            By leveraging the power of artificial intelligence and machine learning, this system ensures accurate and
            efficient attendance management, reducing the need for manual input and minimizing errors.
          </p>
        </div>
        <div className="section">
          <h3>Technologies Used</h3>
          <ul className="icon-list">
            <li><i className="fab fa-react"></i> React.js</li>
            <li><i className="fab fa-aws"></i> Amazon Web Services (AWS)</li>
            <li><i className="fas fa-brain"></i> Face Recognition API</li>
            <li><i className="fab fa-node-js"></i> Node.js & Express</li>
            <li><i className="fab fa-python"></i> Python(BackEnd)</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Face Recognition Attendance System</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/add-employee">Add Employee</Link> 
            <Link to="/clock-in">Clock In</Link> 
            <Link to="/records">Records</Link>
            <Link to="/clock-out">Clock Out</Link>
            <Link to="/recordsout">Records Out</Link> 
            
            
            
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/list-employees" element={<ListEmployees />} /> 
            <Route path="/clock-in" element={<ClockIn />} /> 
            <Route path="/clock-out" element={<ClockOut />} />
            <Route path="/update-employee/:id" element={<UpdateEmployee />} />
            <Route path="/records" element={<ClockInRecords />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/recordsout" element={<ClockOutRecords />} />
            <Route path="/" element={
              <section className="landing-section">
                <h2>Welcome to the Face Recognition Attendance System</h2>
                <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
              </section>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

