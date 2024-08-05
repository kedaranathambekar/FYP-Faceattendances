
// export default App;
// src/App.js
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Face Recognition Attendance System</h1>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </nav>
//         </header>
//         <main>
//           <Switch>
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//             <Route path="/">
//               <section className="landing-section">
//                 <h2>Welcome to the Face Recognition Attendance System</h2>
//                 <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
//               </section>
//             </Route>
//           </Switch>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Face Recognition Attendance System</h1>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/" element={
//               <section className="landing-section">
//                 <h2>Welcome to the Face Recognition Attendance System</h2>
//                 <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
//               </section>
//             } />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Face Recognition Attendance System</h1>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={
//               <section className="landing-section">
//                 <h2>Welcome to the Face Recognition Attendance System</h2>
//                 <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
//               </section>
//             } />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Face Recognition Attendance System</h1>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={
//               <section className="landing-section">
//                 <h2>Welcome to the Face Recognition Attendance System</h2>
//                 <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
//               </section>
//             } />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import AddEmployee from './components/AddEmployee';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Face Recognition Attendance System</h1>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/add-employee" element={<AddEmployee />} />
//             <Route path="/" element={
//               <section className="landing-section">
//                 <h2>Welcome to the Face Recognition Attendance System</h2>
//                 <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
//               </section>
//             } />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';
import ListEmployees from './components/ListEmployees'; 
import ClockIn from './components/ClockIn'; 
import UpdateEmployee from './components/UpdateEmployee';
import ClockInRecords from './components/ClockInRecords';

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
            <Route path="/update-employee/:id" element={<UpdateEmployee />} />
            <Route path="/records" element={<ClockInRecords />} />
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

