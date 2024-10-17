import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
  
      try {
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        });
        const data = await response.json();
       console.log(data);
       console.log(response.data);
        if (response.ok) {
          setUser(data);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/login'); 
        } else {
          console.error("An error occurred:", error);
        }

      }
    };
  
    fetchProfile();
  }, []);



  return (
    <div>
   
       {/* <p>{user.name}</p>  */}
       
       <div>
        <p>hello</p>
           <p>Name: aryan</p>
       </div>
    </div>
  )
}

export default Profile