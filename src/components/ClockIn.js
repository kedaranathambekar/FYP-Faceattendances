// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import Webcam from 'react-webcam';
// //import './ClockIn.css'; // Ensure you create a CSS file for styling

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
//     <div className="clockin-container">
//       <h2>Clock In</h2>
//       <div className="webcam-container">
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
//         <div className="employee-card">
//           <p>Name: {employee.firstName} {employee.lastName}</p>
//           <p>Employee ID: {employee.employeeId}</p>
//           <p>Department: {employee.department}</p>
//           <p>Team: {employee.team}</p>
//           <img src={capturedImage} alt="Captured" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ClockIn;


// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Webcam from 'react-webcam';

// function ClockIn() {
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [employee, setEmployee] = useState(null);
//   const [message, setMessage] = useState('');
//   const webcamRef = useRef(null);

//   // Properly stop webcam stream when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (webcamRef.current && webcamRef.current.stream) {
//         webcamRef.current.stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   const handleClockIn = async () => {
//     try {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);

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

//   const handleReset = () => {
//     setCapturedImage(null);
//     setEmployee(null);
//     setMessage('');
   
//     if (webcamRef.current && webcamRef.current.stream) {
//       webcamRef.current.stream.getTracks().forEach(track => track.stop());
//       setTimeout(() => {
//         if (webcamRef.current && webcamRef.current.start) {
//           webcamRef.current.start();
//         }
//       }, 1000);
//     }
//   };

//   return (
//     <div>
//       <h2>Clock In</h2>
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={640}
//           height={480}
//         />
//         <button onClick={handleClockIn}>Clock In</button>
//       </div>
//       {capturedImage && (
//         <div>
//           <img src={capturedImage} alt="Captured" />
//         </div>
//       )}
//       {message && <p>{message}</p>}
//       {employee && (
//         <div>
//           <h3>Employee Details</h3>
//           <p>Name: {employee.firstName} {employee.lastName}</p>
//           <p>Employee ID: {employee.employeeId}</p>
//           <p>Department: {employee.department}</p>
//           <p>Team: {employee.team}</p>
//           <img src={employee.imageUrl} alt="Employee" />
//         </div>
//       )}
//       <button onClick={handleReset}>Reset for Next Employee</button>
//     </div>
//   );
// }

// export default ClockIn;

// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios';
// import Webcam from 'react-webcam';

// function ClockIn() {
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [employee, setEmployee] = useState(null);
//   const [message, setMessage] = useState('');
//   const webcamRef = useRef(null);

//   // Properly stop webcam stream when the component unmounts
//   useEffect(() => {
//     const currentWebcamRef = webcamRef.current;
//     return () => {
//       if (currentWebcamRef && currentWebcamRef.stream) {
//         currentWebcamRef.stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   const handleClockIn = async () => {
//     try {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);

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

//   const handleReset = () => {
//     setCapturedImage(null);
//     setEmployee(null);
//     setMessage('');
//     // Restart the webcam
//     if (webcamRef.current && webcamRef.current.stream) {
//       webcamRef.current.stream.getTracks().forEach(track => track.stop());
//       setTimeout(() => {
//         if (webcamRef.current && webcamRef.current.start) {
//           webcamRef.current.start();
//         }
//       }, 1000);
//     }
//   };

//   return (
//     <div>
//       <h2>Clock In</h2>
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={640}
//           height={480}
//         />
//         <button onClick={handleClockIn}>Clock In</button>
//       </div>
//       {capturedImage && (
//         <div>
//           <img src={capturedImage} alt="Captured" />
//         </div>
//       )}
//       {message && <p>{message}</p>}
//       {employee && (
//         <div>
//           <h3>Employee Details</h3>
//           <p>Name: {employee.firstName} {employee.lastName}</p>
//           <p>Employee ID: {employee.employeeId}</p>
//           <p>Department: {employee.department}</p>
//           <p>Team: {employee.team}</p>
//           {/* <img src={employee.imageUrl} alt="Employee" /> */}
//         </div>
//       )}
//       <button onClick={handleReset}>Reset for Next Employee</button>
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
      setMessage('Employee Not Found');
    }
  };

  // const handleClockOut = async () => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:5000/clock-out', {
  //       image: capturedImage,
  //     });

  //     if (response.data.success) {
  //       setEmployee(response.data.employee);
  //       setMessage('Clock out successful!');
  //     } else {
  //       setMessage('No matching faces found.');
  //     }
  //   } catch (error) {
  //     console.error('Error clocking out:', error);
  //     setMessage('Error clocking out');
  //   }
  // };

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
        <div>
          <h3>Employee Details</h3>
          <p>First Name: {employee.firstName}</p>
          <p>Last Name: {employee.lastName}</p>
          <p>Department: {employee.department}</p>
          <p>Team: {employee.team}</p>
          {/* <img src={employee.imageUrl} alt="Employee" /> */}
        </div>
      )}
    </div>
  );
}

export default ClockIn;
