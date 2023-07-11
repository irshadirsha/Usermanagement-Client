import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './EditUser.css'
function EditUser() {
    const navigate= useNavigate()
    const {name,id} =useSelector(state=>state.admin)
    console.log(name,id);
    const [username,setUsername]=useState(name)

    const handleUserEdit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/admin/edit-user',{username,id},{withCredentials:true}).then((res)=>{
      let data=res.data
      console.log(data);
      if(data){
         navigate('/admin')
      }
        })
    }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
        <form className="form card-1" onSubmit={handleUserEdit}>
          <div className="card_header">

            <h1 className="form_heading">Edit User</h1>
          </div>
          <div className="field">
            <label for="username">Username</label>
            <input className="input" value={username}  name="username" type="text" placeholder="Username" id="username" onChange={(e)=>setUsername(e.target.value)} />
          </div>


          <div className="field">
            <button type='submit' className="button">Update</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default EditUser

