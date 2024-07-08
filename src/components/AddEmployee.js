// // import React, { useState } from 'react';

// // function AddEmployee() {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [image, setImage] = useState(null);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Handle the form submission logic (e.g., sending data to the backend)
// //     console.log('Employee Added:', { firstName, lastName, image });
// //     // Reset form fields
// //     setFirstName('');
// //     setLastName('');
// //     setImage(null);
// //   };

// //   const handleImageChange = (event) => {
// //     setImage(event.target.files[0]);
// //   };

// //   return (
// //     <div>
// //       <h2>Add Employee</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           value={firstName}
// //           onChange={(e) => setFirstName(e.target.value)}
// //           placeholder="First Name"
// //           required
// //         />
// //         <input
// //           type="text"
// //           value={lastName}
// //           onChange={(e) => setLastName(e.target.value)}
// //           placeholder="Last Name"
// //           required
// //         />
// //         <input
// //           type="file"
// //           onChange={handleImageChange}
// //           accept="image/*"
// //           required
// //         />
// //         <button type="submit">Add Employee</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AddEmployee;


// import React, { useState } from 'react';

// function AddEmployee() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!image) {
//       alert('Please upload an image.');
//       return;
//     }

//     // Convert image to base64
//     const reader = new FileReader();
//     reader.readAsDataURL(image);
//     reader.onloadend = async () => {
//       const base64Image = reader.result;
      
//       // Handle the form submission logic (e.g., sending data to the backend)
//       try {
//         const response = await fetch('https://hr54g91jih.execute-api.us-east-1.amazonaws.com/add-employee', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ firstName, lastName, image: base64Image })
//         });
        
//         const result = await response.json();
//         if (result.success) {
//           alert('Employee added successfully');
//           // Reset form fields
//           setFirstName('');
//           setLastName('');
//           setImage(null);
//         } else {
//           alert('Failed to add employee');
//         }
//       } catch (error) {
//         console.error('Error adding employee:', error);
//         alert('Error adding employee');
//       }
//     };
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   return (
//     <div>
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="First Name"
//           required
//         />
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Last Name"
//           required
//         />
//         <input
//           type="file"
//           onChange={handleImageChange}
//           accept="image/*"
//           required
//         />
//         <button type="submit">Add Employee</button>
//       </form>
//     </div>
//   );
// }

// export default AddEmployee;


import React, { useState } from 'react';

function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!image) {
      alert('Please upload an image.');
      return;
    }

    // Convert image to base64
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const base64Image = reader.result;
      
      // Handle the form submission logic (e.g., sending data to the backend)
      try {
        const response = await fetch('http://127.0.0.1:5000/add-employee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstName, lastName, image: base64Image })
        });
        
        const result = await response.json();
        if (result.success) {
          alert('Employee added successfully');
          // Reset form fields
          setFirstName('');
          setLastName('');
          setImage(null);
        } else {
          alert('Failed to add employee');
        }
      } catch (error) {
        console.error('Error adding employee:', error);
        alert('Error adding employee');
      }
    };
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
