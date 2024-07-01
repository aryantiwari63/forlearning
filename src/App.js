import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import {Routes,Route,  Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
         {/*   <Form/>*/}

         <Navbar/>
        <Routes>
         
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Form/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        
    </div>
  );
}

export default App;
