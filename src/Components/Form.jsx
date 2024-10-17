import React, { useState } from 'react'
import Formstyle from './Form.css'
function Form() {


    const[formdata, setformdata] = useState({
        name:'',
        email:'',
        password:'',
        });
         
      const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({
          ...formdata,
          [name]: value,
        });
      };
      
    const formdatafun = async(e) =>{
      e.preventDefault();
      console.log(formdata);
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata)
        });
        if (response.ok) {
          alert('form posted successfully!');
        } else {
          alert('Failed to post form');
        }
        const result = await response.json();
        console.log('Success:', result);
      } catch (error) {
        console.error('Error:', error);
        alert('Error posting job');
      }
    };

  return (
    <div>
          <form onSubmit={formdatafun}>
            <label>Name</label>
            <input type="text" name="name"  onChange={handleChange}/><br/>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange}/><br/>
            <button>Submit</button>
          </form>
    </div>
  )
}

export default Form;
