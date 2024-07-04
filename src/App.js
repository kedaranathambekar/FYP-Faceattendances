// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Face Recognition Attendance System</h1>
//       </header>
//       <main>
//         <section className="landing-section">
//           <h2>Welcome to the Face Recognition Attendance System</h2>
//           <p>This system uses advanced face recognition technology to manage and track attendance efficiently.</p>
//           <div className="button-group">
//             <button className="main-button" onClick={() => alert('Login functionality coming soon!')}>Login</button>
//             <button className="main-button" onClick={() => alert('Register functionality coming soon!')}>Register</button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

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


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddEmployee from './components/AddEmployee';

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
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-employee" element={<AddEmployee />} />
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

