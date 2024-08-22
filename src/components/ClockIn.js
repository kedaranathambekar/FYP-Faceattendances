import React, { useState, useRef } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

function ClockIn() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState('');
  const webcamRef = useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleClockIn = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/clock-in', {
        image: capturedImage,
      });

      if (response.data.success) {
        setEmployee(response.data.employee);
        
      } else {
        setMessage('No matching faces found.');
      }
    } catch (error) {
      console.error('Error clocking in:', error);
      setMessage('Employee Not Found');
    }
  };



  return (
    <div>
      <h2>Clock In </h2>
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
        <button onClick={handleCapture}>Capture Image</button>
      </div>
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" />
          <button onClick={handleClockIn}>Clock In</button>
          {/* <button onClick={handleClockOut}>Clock Out</button> */}
        </div>
      )}
      {message && <p>{message}</p>}
      {employee && (
        
        <div class="clock-in-container">
        <h1 class="success-message">Clock in successful!</h1>
        <div class="employee-details">
        <h3>Employee Details</h3>
        <p>First Name:{employee.firstName} </p>
        <p>Last Name: {employee.lastName}</p>
        <p>Department: {employee.department} </p>
        <p>Team: {employee.team}</p>
        </div>
        </div>

      )}
    </div>
  );
}

export default ClockIn;
