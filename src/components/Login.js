import React, { useState, useRef, useCallback } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import userPool from '../aws-config';
import Webcam from 'react-webcam';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [useFaceRecognition, setUseFaceRecognition] = useState(false);
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('Login successful:', result);
        localStorage.setItem('username', username);
        navigate('/dashboard');
      },
      onFailure: (err) => {
        console.error('Login failed:', err);
      },
    });
  };

  const handleFaceRecognitionLogin = useCallback(async () => {
    const capture = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      return imageSrc;
    };

    const imageSrc = capture();

    try {
      const response = await axios.post('http://127.0.0.1:5000/face-login', { image: imageSrc });

      if (response.data.success) {
        localStorage.setItem('username', response.data.username);
        navigate('/dashboard');
      } else {
        alert('Face recognition login failed');
      }
    } catch (error) {
      console.error('Error during face recognition login:', error);
      alert('Error during face recognition login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Login</h2>
      
      {useFaceRecognition ? (
        <div>
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <button onClick={handleFaceRecognitionLogin}className='button'>Sign in</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      )}
       <button onClick={() => setUseFaceRecognition(!useFaceRecognition)}className='button'>
        {useFaceRecognition ? 'Use keyboard Login' : 'Use Face Login'}
      </button>
    </div>
  );
}

export default Login;
