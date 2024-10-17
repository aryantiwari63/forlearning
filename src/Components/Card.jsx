import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Cardstyle from './Card.css';

//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Card() {
       const [showdata, setshowdata] = useState([]);
       const [editdata, seteditdata] = useState([]);
       const history = useNavigate();

       const deleted =async(id)=>{
        const deletedata = await axios.delete(`http://localhost:5000/api/card/${id}`);
        setshowdata(prevData => prevData.filter(user => user._id !== id));
        console.log(showdata);
    }
       
       const show =async()=>{
        const response = await axios.get(`http://localhost:5000/api/card`);
         setshowdata(response.data);
         console.log(showdata);
       }
      const newpage = (id)=>{
        //history('/Newpage/${id}');  
        history(`/Newpage/${id}`); 
      }
      
  return (
    <div>
      <button onClick={show}>Show all users</button>
                      {showdata.map((data,count=0) => (
                        <div key={data._id} className='cardpart'> 
                            <h1>user {count+1}</h1>
                           <p>ID: -{data._id}  </p>
                           <p>Name:-{data.name}</p>
                        <div className='icons'> 
                    <FontAwesomeIcon  icon={faTrash} className='firsticon' onClick={() => deleted(data._id)} />
                    {/* <FontAwesomeIcon  icon={faEdit} onClick={() => editd(data._id)} />  */}
                    <FontAwesomeIcon  icon={faEdit} className='secondicon' onClick={() => newpage(data._id)}/>
                      </div>
                        </div>
                      ))} 
       
     </div>
       
    
  );
}

export default Card;
