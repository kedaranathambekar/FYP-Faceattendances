// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import Webcam from 'react-webcam';

// function ClockIn() {
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [employee, setEmployee] = useState(null);
//   const [message, setMessage] = useState('');
//   const webcamRef = useRef(null);

//   const handleClockIn = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/clock-in', {
//         image: imageSrc,
//       });

//       if (response.data.success) {
//         setEmployee(response.data.employee);
//         setMessage('Clock in successful!');
//       } else {
//         setMessage('No matching faces found.');
//       }
//     } catch (error) {
//       console.error('Error clocking in:', error);
//       setMessage('Error clocking in');
//     }
//   };

//   const resetWebcam = () => {
//     setCapturedImage(null);
//     setEmployee(null);
//     setMessage('');
//   };

//   return (
//     <div>
//       <h2>Clock In</h2>
//       <div>
//         {!capturedImage ? (
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             width={640}
//             height={480}
//           />
//         ) : (
//           <img src={capturedImage} alt="Captured" />
//         )}
//         <button onClick={!capturedImage ? handleClockIn : resetWebcam}>
//           {!capturedImage ? 'Clock In' : 'Reset for Next Employee'}
//         </button>
//       </div>
//       {message && <p>{message}</p>}
//       {employee && (
//         <div>
//           <h3>Employee Details</h3>
//           <p>Employee ID: {employee.employeeId}</p>
//           <p>First Name: {employee.firstName}</p>
//           <p>Last Name: {employee.lastName}</p>
//           <p>Department: {employee.department}</p>
//           <p>Team: {employee.team}</p>
//           <img src={employee.imageUrl} alt="Employee" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ClockIn;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
//import './ClockIn.css'; // Ensure you create a CSS file for styling

function ClockIn() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [message, setMessage] = useState('');
  const webcamRef = useRef(null);

  const handleClockIn = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    try {
      const response = await axios.post('http://127.0.0.1:5000/clock-in', {
        image: imageSrc,
      });

      if (response.data.success) {
        setEmployee(response.data.employee);
        setMessage('Clock in successful!');
      } else {
        setMessage('No matching faces found.');
      }
    } catch (error) {
      console.error('Error clocking in:', error);
      setMessage('Error clocking in');
    }
  };

  const resetWebcam = () => {
    setCapturedImage(null);
    setEmployee(null);
    setMessage('');
  };

  return (
    <div className="clockin-container">
      <h2>Clock In</h2>
      <div className="webcam-container">
        {!capturedImage ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={640}
            height={480}
          />
        ) : (
          <img src={capturedImage} alt="Captured" />
        )}
        <button onClick={!capturedImage ? handleClockIn : resetWebcam}>
          {!capturedImage ? 'Clock In' : 'Reset for Next Employee'}
        </button>
      </div>
      {message && <p>{message}</p>}
      {employee && (
        <div className="employee-card">
          <p>Name: {employee.firstName} {employee.lastName}</p>
          <p>Employee ID: {employee.employeeId}</p>
          <p>Department: {employee.department}</p>
          <p>Team: {employee.team}</p>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
}

export default ClockIn;


