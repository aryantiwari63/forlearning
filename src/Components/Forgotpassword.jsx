import React, { useState } from 'react'
import axios from 'axios';
function Forgotpassword() {

    const [email ,setemail] = useState("");
    const changestate = (e) => {
        setemail(e.target.value);
    }
    const submitform = async(e) =>{
        e.preventDefault();
         const response = await axios.post(`http://localhost:5000/api/request-password-reset`,{email});
             if(response.ok){
              console.log("all things work correctly");
             }
        } 
  return (
    <div>
         <form onSubmit={submitform}>
            <label>email:</label>
           <input type="email" name="email" onChange={changestate}/> <br/>
           <button>Send link</button>
         </form>
    </div>
  )
}

export default Forgotpassword