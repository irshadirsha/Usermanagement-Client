import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import './Profile.css'
import axios from 'axios'
import { updateUser } from '../../redux/user/userSlice'
function Profile() {
    const dispatch=useDispatch()
    const [imageUrl,setImageUrl]=useState(null)
    const { username, userId, image } = useSelector(state => state.user)
    console.log("jjjjjjjjjjj",username,userId,image);
  
  const imageUpload=async(e)=>{
   e.preventDefault()
   
   const formData = new FormData()
        
   formData.append('image', imageUrl)
   formData.append("userId", userId)
   formData.append("ll","ss")
  console.log("lllllllllllllllllll" ,formData.get("image"));
  console.log("axiiiiii",userId);
   const config = {
    header: {
        "content-type": "multipart/form-data",
        userId: userId
    },
    withCredentials: true
}   

const { data } = await axios.post("http://localhost:3000/profile", formData, config);
dispatch(updateUser({ image: data.imageurl, username, userId }));
console.log("axiiiiii",data.imageurl);

  }
  return (
    <div>
     <br />
      <div className='profilePage'>
        <div className="card-client">
          <div className="user-picture">
            {!image ? <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
            </svg> :
            <img className='pri' src={`/Images/${image}`} alt="" width={100}/>}
          </div>
          <p className="name-client"> {username}
            <span>
            </span>
          </p>

        </div>

      </div>
     
     
      <div class="container">
		<form onSubmit={imageUpload}>
			<label for="arquivo"></label>
			<input accept=".jpg, .jpeg, .png, .gif, .pdf" className="inpdddut" name="arquivo" id="arquivo" type="file" onChange={(e)=>setImageUrl(e.target.files[0])}/>
			{imageUrl &&<input value="Send" type="submit" className="inpdddut"/>}
		</form>
	</div>


    
    </div>
  )
}

export default Profile
