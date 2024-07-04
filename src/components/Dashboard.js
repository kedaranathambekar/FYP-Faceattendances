// // src/components/Dashboard.js
// import React from 'react';

// function Dashboard() {
//   return (
//     <div>
//       <h2>Welcome to your Dashboard</h2>
//       <p>This is a protected page accessible only after successful login.</p>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState } from 'react';
// import Webcam from 'react-webcam';

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: 'user'
// };

// function Dashboard() {
//   const [capturedImage, setCapturedImage] = useState(null);

//   const webcamRef = React.useRef(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//   }, [webcamRef]);

//   const verifyFace = async () => {
//     if (!capturedImage) {
//       alert('Please capture an image first.');
//       return;
//     }

//     try {
//       const response = await fetch('https://your-api-id.execute-api.region.amazonaws.com/verify-face', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any necessary authorization headers
//         },
//         body: JSON.stringify({ image: capturedImage })
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert('Face verification successful.');
//       } else {
//         alert('Face verification failed.');
//       }
//     } catch (error) {
//       console.error('Face verification error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>This is a protected page accessible only after successful login.</p>
//       <Webcam
//         audio={false}
//         height={720}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={1280}
//         videoConstraints={videoConstraints}
//       />
//       <button onClick={capture}>Capture Photo</button>
//       {capturedImage && <img src={capturedImage} alt="Captured" />}
//       <button onClick={verifyFace}>Verify Face</button>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/add-employee');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard! This is a protected page accessible only after successful login.</p>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
}

export default Dashboard;


