// src/components/Register.js
import React, { useState } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import userPool from '../aws-config';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const attributeList = [];
    attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));

    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        console.error('Registration failed:', err);
        return;
      }
      console.log('Registration successful:', result);
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
