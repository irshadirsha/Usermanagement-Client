import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'
import axios from 'axios'
function AdminLogin() {
    useEffect(()=>{
    const admin=localStorage.getItem('admin')
    if(admin){
        navigate('/admin')
    }
    },[])
    const navigate=useNavigate()
    const generateError = (err) => toast.error(err, {
        position: "bottom-right"
    })
    const [admin,setAdmin]=useState({})
    const handleAdminlogin=(e)=>{
       e.preventDefault()
   axios.post('http://localhost:3000/admin/adminlogin',{...admin},{withCredentials:true}).then((res)=>{
      const data=res.data
       console.log("admilogggggg",data)
       if(data){
        if(data.errors){
            const {username,password}=data.errors
            if(username) generateError(username)
            else generateError(password)    
        }else{
            if(data.token){
                console.log("kkkkkkkkkkkkkk");
                localStorage.setItem('admin',JSON.stringify(data))
                navigate('/admin')
            }
        }
    }
   })
    }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
            <form  onSubmit={handleAdminlogin} className="form card">
                <div className="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 className="form_heading">Admin Login</h1>
                </div>
                <div className="field">
                    <label for="username">Username</label>
                    <input className="input" name="username" type="text" placeholder="Username" id="username" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})}  />
                </div>
                <div className="field">
                    <label for="password">Password</label>
                    <input className="input" name="password" type="password" placeholder="Password" id="password" onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})} />
                </div>
                <div className="field">
                    <button type='submit' className="button">Login</button>
                </div>
            </form>
      
        </div>

    </div>
  )
}

export default AdminLogin
