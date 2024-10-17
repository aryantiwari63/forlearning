import React, {useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Resetpassword() {

    const [password, setPassword] = useState('');
   
    const { token } = useParams();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
       const response =  await axios.post(`http://localhost:5000/api/reset-password/${token}`, { password });
      
      if (response.data.success) {
        console.log('Password changed successfully');
    } 

} catch (error) {
  console.error(error);
 
}
    };
  return (
    <div>
             <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>

    </div>
  )
}

export default Resetpassword