
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function UpdateEmployee() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/employee/${id}`);
//         const data = await response.json();
//         setEmployee(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(`http://127.0.0.1:5000/update-employee/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(employee),
//       });

//       if (response.ok) {
//         //alert('Employee updated successfully');
//         navigate('/list-employees');
//       } else {
//         const result = await response.json();
//         alert(`Failed to update employee: ${result.error}`);
//       }
//     } catch (err) {
//       alert(`Error updating employee: ${err.message}`);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <p>FirstName:
//         <input
//           type="text"
//           name="firstName"
//           value={employee.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//           required
//         />
//         </p>
//         <p>SecondName:
//         <input
//           type="text"
//           name="lastName"
//           value={employee.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//           required
//         /></p>
//         <p>Department:
//         <input
//           type="text"
//           name="department"
//           value={employee.department}
//           onChange={handleChange}
//           placeholder="Department"
//           required
//         /></p>
//         <p>Team:
//         <input
//           type="text"
//           name="team"
//           value={employee.team}
//           onChange={handleChange}
//           placeholder="Team"
//           required
//         /></p>
//         <button type="submit">Update Employee</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateEmployee;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function UpdateEmployee() {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [department, setDepartment] = useState('');
//   const [team, setTeam] = useState('');
//   const [employeeId, setEmployeeId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEmployee();
//   }, []);

//   const fetchEmployee = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/employee/${id}`);
//       const data = await response.json();
//       setEmployee(data);
//       setFirstName(data.firstName);
//       setLastName(data.lastName);
//       setDepartment(data.department);
//       setTeam(data.team);
//       setEmployeeId(data.employeeId); // assuming you added employeeId to the employee data
//     } catch (error) {
//       console.error('Error fetching employee:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const updatedEmployee = {
//       firstName,
//       lastName,
//       department,
//       team,
//       employeeId,
//     };

//     try {
//       const response = await fetch(`http://127.0.0.1:5000/update-employee/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedEmployee),
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert('Employee updated successfully');
//         navigate('/list-employees');
//       } else {
//         alert('Failed to update employee');
//       }
//     } catch (error) {
//       console.error('Error updating employee:', error);
//       alert('Error updating employee');
//     }
//   };

//   if (!employee) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={employeeId}
//           onChange={(e) => setEmployeeId(e.target.value)}
//           placeholder="Employee ID"
//           required
//         />
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="First Name"
//           required
//         />
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Last Name"
//           required
//         />
//         <input
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           placeholder="Department"
//           required
//         />
//         <input
//           type="text"
//           value={team}
//           onChange={(e) => setTeam(e.target.value)}
//           placeholder="Team"
//           required
//         />
//         <button type="submit" className="update-btn">Update Employee</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateEmployee;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function UpdateEmployee() {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [department, setDepartment] = useState('');
//   const [team, setTeam] = useState('');
//   const [employeeId, setEmployeeId] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchEmployee();
//   }, []);

//   const fetchEmployee = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/employee/${id}`);
//       const data = await response.json();
//       setEmployee(data);
//       setFirstName(data.firstName);
//       setLastName(data.lastName);
//       setDepartment(data.department);
//       setTeam(data.team);
//       setEmployeeId(data.employeeId); // assuming you added employeeId to the employee data
//     } catch (error) {
//       console.error('Error fetching employee:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const updatedEmployee = {
//       firstName,
//       lastName,
//       department,
//       team,
//       employeeId,
//     };

//     try {
//       const response = await fetch(`http://127.0.0.1:5000/update-employee/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedEmployee),
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert('Employee updated successfully');
//         navigate('/list-employees');
//       } else {
//         alert('Failed to update employee');
//       }
//     } catch (error) {
//       console.error('Error updating employee:', error);
//       alert('Error updating employee');
//     }
//   };

//   if (!employee) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Update Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={employeeId}
//           onChange={(e) => setEmployeeId(e.target.value)}
//           placeholder="Employee ID"
//           required
//         />
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="First Name"
//           required
//         />
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Last Name"
//           required
//         />
//         <input
//           type="text"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//           placeholder="Department"
//           required
//         />
//         <input
//           type="text"
//           value={team}
//           onChange={(e) => setTeam(e.target.value)}
//           placeholder="Team"
//           required
//         />
//         <button type="submit" className="update-btn">Update Employee</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateEmployee;

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
      setEmployeeId(data.employeeId); // assuming you added employeeId to the employee data
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
