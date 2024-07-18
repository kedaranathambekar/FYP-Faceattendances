// // src/components/Login.js
// import React, { useState } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
// import userPool from '../aws-config';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const user = new CognitoUser({ Username: username, Pool: userPool });
//     const authDetails = new AuthenticationDetails({ Username: username, Password: password });

//     user.authenticateUser(authDetails, {
//       onSuccess: (result) => {
//         console.log('Login successful:', result);
//       },
//       onFailure: (err) => {
//         console.error('Login failed:', err);
//       },
//     });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
// src/components/Login.js
// import React, { useState } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
// import { useNavigate } from 'react-router-dom';
// import userPool from '../aws-config';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const user = new CognitoUser({ Username: username, Pool: userPool });
//     const authDetails = new AuthenticationDetails({ Username: username, Password: password });

//     user.authenticateUser(authDetails, {
//       onSuccess: (result) => {
//         console.log('Login successful:', result);
//         navigate('/dashboard');
//       },
//       onFailure: (err) => {
//         console.error('Login failed:', err);
//       },
//     });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
// import { useNavigate } from 'react-router-dom';
// import userPool from '../aws-config';
// import WebcamCapture from './WebcamCapture';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [capturedImage, setCapturedImage] = useState(null);
//   const navigate = useNavigate();

//   const handleCapture = (image) => {
//     setCapturedImage(image);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!capturedImage) {
//       alert('Please capture an image first.');
//       return;
//     }

//     const user = new CognitoUser({ Username: username, Pool: userPool });
//     const authDetails = new AuthenticationDetails({ Username: username, Password: password });

//     user.authenticateUser(authDetails, {
//       onSuccess: (result) => {
//         console.log('Login successful:', result);
//         // Send capturedImage to backend for face recognition
//         verifyFace(capturedImage, result);
//       },
//       onFailure: (err) => {
//         console.error('Login failed:', err);
//       },
//     });
//   };

//   const verifyFace = async (image, authResult) => {
//     try {
//       const response = await fetch('your-backend-api/verify-face', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: authResult.getAccessToken().getJwtToken()
//         },
//         body: JSON.stringify({ image })
//       });

//       const result = await response.json();

//       if (result.success) {
//         navigate('/dashboard');
//       } else {
//         alert('Face verification failed.');
//       }
//     } catch (error) {
//       console.error('Face verification error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//       <WebcamCapture onCapture={handleCapture} />
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import userPool from '../aws-config';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('Login successful:', result);
        navigate('/dashboard');
      },
      onFailure: (err) => {
        console.error('Login failed:', err);
      },
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
