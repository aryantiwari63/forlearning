import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import newstyle from './Newpage.css';

function Newpage() {
    const {id} = useParams();
    const[newdata, setnewdata] = useState({
        name:'',
        email:''
        });
         
      const handleChange = (e) => {
        const { name, value } = e.target;
        setnewdata({
          ...newdata,
          [name]: value,
        });
      };
      
      const editd =async(e)=>{
        e.preventDefault();
       
        const editdata = await axios.put(`http://localhost:5000/api/card/${id}`,newdata);
         console.log(editdata);
        // seteditdata(editdata);
      }
       
     
  return (
    <div>
             <form onSubmit={editd}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange}/><br/>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange}/><br/>
              <button className='newpagebtn'>Save</button>
          </form>
    </div>
  )
}

export default Newpage