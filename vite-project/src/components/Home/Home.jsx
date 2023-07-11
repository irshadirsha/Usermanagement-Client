import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'
import { useSelector } from 'react-redux'

function Home() {
const navigate=useNavigate()
const {username}=useSelector(state=>state.user)
useEffect(()=>{
    const token =localStorage.getItem('user')
    console.log(token);
    axios.post('http://localhost:3000',{token}).then((result)=>{
        
        if(result.data.token){
            if(result.data.token==='valid'){

            }else{
                localStorage.removeItem('user')
                navigate('/login')
            }
         }else{
            navigate('/login')
         }
    })
},[])
const navToProfile=(e)=>{
    navigate('/profile')
}
const handlelogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/login')

}
  return (
    <div>
       <div>
     <nav className="navbar">
<div className="left">
    <h1>HomePage</h1>
</div>
<div className="right">
    <input type="checkbox" id="check" />
    <label for="check" className="checkBtn">
        <i className="fa fa-bars"></i>
    </label>
    <ul className="list">
    <li><a onClick={navToProfile} >Profile</a></li>
        <li><a onClick={handlelogout} >Logout</a></li>

    </ul>
</div>
</nav>
    </div>
    <div className='user11'>
        
        <h2>Wellcome To Home Page</h2>
        <br></br>
        <h2> {username}</h2>
    </div>

    </div>
  )
}

export default Home
