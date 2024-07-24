// import React, { useState, useEffect } from 'react';

// function ListEmployees() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/employees')
//       .then(response => response.json())
//       .then(data => setEmployees(data))
//       .catch(error => console.error('Error fetching employees:', error));
//   }, []);


//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/delete-employee/${id}`, {
//         method: 'DELETE'
//       });
//       const result = await response.json();
//       if (result.success) {
//         setEmployees(employees.filter(employee => employee.id !== id));
//       } else {
//         alert('Failed to delete employee');
//       }
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//       alert('Error deleting employee');
//     }
//   };
//   return (
//     <div>
//       <h2>Employee List</h2>
//       <ul>
//         {employees.map(employee => (
//           <li key={employee.id}>
//             {employee.firstName} {employee.lastName}
//             {/* <img src={employee.imageUrl} alt={`${employee.firstName} ${employee.lastName}`} width="100" /> */}
//           <button onClick={() => handleDelete(employee.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListEmployees;
import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import deleteIcon from '../assets/delete-icon.png'; 
import { Link } from 'react-router-dom';

function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete-employee/${id}`);
      setEmployees(employees.filter(employee => employee.id !== id));
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
            
            <div>
              <p>FirstName:{employee.firstName} SecondName:{employee.lastName} Department:{employee.department} Team: {employee.team}</p>
              
            </div>
            <button onClick={() => handleDelete(employee.id)}>
              <img src={deleteIcon} alt="Delete" width="20" height="20" />
            </button>
            {/* <Link to={`/update-employee/${employee.id}`}>Update</Link> */}
            <Link to={`/update-employee/${employee.id}`} className="button">Update</Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default ListEmployees;
