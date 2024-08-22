import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClockInRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/clock-in-records');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching clock-in records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Employee Records</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Department</th>
            <th>Team</th>
            <th>Time</th>
            <th>Image</th>
            
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.firstName} {record.lastName}</td>
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

export default ClockInRecords;
