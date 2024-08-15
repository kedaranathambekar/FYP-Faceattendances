import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClockOutRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/clock-out-records');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching clock-out records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Clock Out Records</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Team</th>
            <th>Timestamp</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.employeeId}</td>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.department}</td>
              <td>{record.team}</td>
              <td>{record.timestamp}</td>
              <td>
                <img src={record.image} alt="Clock Out" width="50" height="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClockOutRecords;
