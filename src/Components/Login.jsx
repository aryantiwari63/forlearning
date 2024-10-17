import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import loginstyle from './Login.css'

function Login() {
        const [email,setemail] = useState("");
      const [password, setpassword]= useState("");
       const navigate = useNavigate();

      const handlemail = (e) => { setemail(e.target.value)};
      const handlepass = (e) => { setpassword(e.target.value)};
        const onsubmit = async(e) =>{
            e.preventDefault();
           if(!email && !password){
            console.log("please fill all fields")
           }
           try{
           const response = await fetch('http://localhost:5000/api/login',{
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        
        });
        
        const data = await response.json();
        
        console.log("this is data",data);
                                          
        if(response.ok){
            console.log("Login successfuly");
            localStorage.setItem('token',data.token);
            localStorage.setItem('refreshtoken',data.refreshtoken);
            navigate('/');
        }
    }
    catch(error){
         console.log("error occure",error);
    }
}
  return (
    <div>
        <form onClick={onsubmit} className='logindata'>
           <label>Email</label>
           <input type="text" name="email" onChange={handlemail}/>
           <label>Password</label>
           <input type="text" name="password" onChange={handlepass} />
           
           <button>submit</button>
           <Link to="/forgot-password">Forgot Password?</Link>
           </form>
    </div>
  )
}

export default Login