import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
     
    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(res.data.message);
      alert(message);
    } catch (err) {
      setMessage('Failed to upload file.');
    }
  };

  return (
    <div>
      <form action="/upload" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleFileChange}/>
           <button type="submit">upload</button>
        </form>
    </div>
  );
};

export default Upload;