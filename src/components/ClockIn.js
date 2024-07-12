import React, { useRef } from 'react';
import Webcam from 'react-webcam';

function ClockIn() {
  const webcamRef = useRef(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    try {
      const response = await fetch('http://127.0.0.1:5000/clock-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageSrc })
      });

      const result = await response.json();
      if (result.success) {
        alert('Clock in successful');
      } else {
        alert('Clock in failed: ' + result.error);
      }
    } catch (error) {
      console.error('Error clocking in:', error);
      alert('Error clocking in');
    }
  };

  return (
    <div>
      <h2>Clock In</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
      <button onClick={capture}>Clock In</button>
    </div>
  );
}

export default ClockIn;
