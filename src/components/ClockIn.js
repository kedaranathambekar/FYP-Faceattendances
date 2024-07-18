// import React, { useRef } from 'react';
// import Webcam from 'react-webcam';

// function ClockIn() {
//   const webcamRef = useRef(null);

//   const capture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/clock-in', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ image: imageSrc })
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert('Clock in successful');
//       } else {
//         alert('Clock in failed: ' + result.error);
//       }
//     } catch (error) {
//       console.error('Error clocking in:', error);
//       alert('Error clocking in');
//     }
//   };

//   return (
//     <div>
//       <h2>Clock In</h2>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={320}
//         height={240}
//       />
//       <button onClick={capture}>Clock In</button>
//     </div>
//   );
// }

// export default ClockIn;
///////////////////////////////////////////////
// import React, { useState } from 'react';
// import axios from 'axios';

// function ClockIn() {
//   const [employeeId, setEmployeeId] = useState('');
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [employee, setEmployee] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleCapture = () => {
//     const video = document.querySelector('video');
//     const canvas = document.createElement('canvas');
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     const image = canvas.toDataURL('image/jpeg');
//     setCapturedImage(image);
//   };

//   const handleClockIn = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/clock-in', {
//         image: capturedImage,
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

//   return (
//     <div>
//       <h2>Clock In</h2>
//       <div>
//         <video autoPlay></video>
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {capturedImage && (
//         <div>
//           <img src={capturedImage} alt="Captured" />
//           <button onClick={handleClockIn}>Clock In</button>
//         </div>
//       )}
//       {message && <p>{message}</p>}
//       {employee && (
//         <div>
//           <h3>Employee Details</h3>
//           <p>First Name: {employee.firstName}</p>
//           <p>Last Name: {employee.lastName}</p>
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
        setMessage('Clock in successful!');
      } else {
        setMessage('No matching faces found.');
      }
    } catch (error) {
      console.error('Error clocking in:', error);
      setMessage('Error clocking in');
    }
  };

  return (
    <div>
      <h2>Clock In</h2>
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
        </div>
      )}
      {message && <p>{message}</p>}
      {employee && (
        <div>
          <h3>Employee Details</h3>
          <p>First Name: {employee.firstName}</p>
          <p>Last Name: {employee.lastName}</p>
          <img src={employee.imageUrl} alt="Employee" />
        </div>
      )}
    </div>
  );
}

export default ClockIn;
