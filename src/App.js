import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";
import Login from "./Components/Login";
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Upload from './Components/Upload';
import {Routes,Route,  Navigate} from 'react-router-dom';
import Card from './Components/Card';
import Newpage from './Components/Newpage';
import Forgotpassword from './Components/Forgotpassword';
import Resetpassword from './Components/Resetpassword';

function App() {
  return (
    <div className="App">
         

        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Form/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/" element={<Navigate to="/login"/>} />
         <Route path="/upload" element={<Upload/>}/> 
          <Route path="/card" element={<Card/>}/>
          <Route path="/Newpage/:id" element={<Newpage/>}/>
          <Route path="/forgot-password" element={<Forgotpassword/>}/>
          <Route path="/reset-password/:token" element={<Resetpassword/>} />
        </Routes>
      
    </div>
  );
}

export default App;
