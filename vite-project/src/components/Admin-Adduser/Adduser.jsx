import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Adduser() {
    const navigate=useNavigate()
    const [user,setUser]=useState({})
const handleAddUser=async(e)=>{
    e.preventDefault()
  const {data}=await axios.post('http://localhost:3000/admin/add-user',{...user},{withCredentials:true})
      console.log(data);
      if({status:true}){
   navigate('/admin')
      }
}
  return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
                <form onSubmit={handleAddUser} className="form card" >
                    <div className="card_header">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                        </svg>
                        <h1 className="form_heading">Add User</h1>
                    </div>
                    <div className="field">
                        <label for="username">Username</label>
                        <input className="input" name="username" type="text" placeholder="Username" id="username" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  />
                    </div>

                    <div className="field">
                        <label for="password">Password</label>
                        <input className="input" name="password" type="password" placeholder="Password" id="password" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  />
                    </div>
                    <div className="field">
                        <button type='submit' className="button">Add</button>
                    </div>
                </form>

            </div>
    </div>
  )
}

export default Adduser
