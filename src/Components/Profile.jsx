import React, { useState, useEffect } from 'react'

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
  
      try {
        const response = await fetch('http://localhost:5000/api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
       
        if (response.ok) {
          setUser(data);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log('Error fetching profile:', error);
      }
    };
  
    fetchProfile();
  }, []);
  return (
    <div>Profile</div>
  )
}

export default Profile