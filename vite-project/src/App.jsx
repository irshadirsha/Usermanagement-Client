  import {  Route, Routes } from "react-router-dom";
  import './App.css'
  import Signup from './Pages/SignupPage'
  import Login from "./components/Login/Login";
  import Home from './components/Home/Home'
  import Profile from "./components/Profile/Profile";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Admin from "./components/Admin/Admin";
import EditUser from "./components/EditUser/EditUser";
import Adduser from "./components/Admin-Adduser/Adduser";

  function App() {

    return (
      <div>
       
        <Routes>
           <Route path="/add-user" element={<Adduser/>}/>
           <Route path="/edit-user" element={<EditUser/>}/>
           <Route path="/admin" element={<Admin/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
     
        </div>
    )
  }

  export default App
