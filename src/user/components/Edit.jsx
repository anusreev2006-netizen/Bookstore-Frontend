import React, { useEffect, useState } from 'react'
import { FaPen, FaPencilAlt } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import axiosInstance from '../../api/axiosinstance'
import { ToastContainer, toast } from 'react-toastify';
import { userUpdateAPI } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';


function Edit() {
    const navigate = useNavigate()
    const [offCanvas,setOffCanvas] = useState(false)
    const [userDetails,setUserDetails] = useState({
      username:"",password:"",cPassword:"",bio:"",picture:"",role:"",id:""
    })
    const [existingPicture,setExistingPicture] = useState("")
    const [preview,setPreview] = useState("")
    const [passwordMatch,setPasswordMatch] = useState(true)
    const [imageFile,setImageFile] = useState(false)

    useEffect(()=>{
      if(sessionStorage.getItem('user')){
        const user = JSON.parse(sessionStorage.getItem('user'))
        setUserDetails({...userDetails,username:user.username,role:user.role,bio:user.bio,id:user._id})
        setExistingPicture(user.picture)
      }
    },[])

    console.log(userDetails);
    // console.log(existingPicture);

    const handleFileUpload =(e)=>{
      // console.log(e.target.files[0]);
      const imageFile = e.target.files[0]
      if(imageFile.type.startsWith('image/')){
        setUserDetails({...userDetails,picture:e.target.files[0]})
        const url = URL.createObjectURL(e.target.files[0])
        //console.log(url);
        setPreview(url)
        setImageFile(true)
      }else{
        setImageFile(false)
      }
      
    }
    
    const checkPassword = (data)=>{
      setUserDetails({...userDetails,cPassword:data})
      userDetails.password==data? setPasswordMatch(true):setPasswordMatch(false)
    }

    const resetProfile = ()=>{
      const user = JSON.parse(sessionStorage.getItem('user'))
      setUserDetails({...userDetails,username:user.username,role:user.role,bio:user.bio,id:user._id})
      setExistingPicture(user.picture)
      setPreview("")
      setImageFile(false)
      setPasswordMatch(true)
    }

    const handleUpdateUser = async ()=>{
      const {username,password,cPassword,bio,picture,id} = userDetails
      if(!username || !password || !cPassword || !bio ){
         toast.info("Please fill the form Completly!!!")
        }else if(passwordMatch){
          const reqBody = new FormData()
          for(let key in userDetails){
            if(key != picture){
              reqBody.append(key,userDetails[key])
            }else{
              preview ? reqBody.append("picture",picture) : reqBody.append("picture",existingPicture)
            }
          }
          // api call 
          const result = await userUpdateAPI(id,reqBody)
          console.log(result);
          if(result.status==200){
            toast.success("User Profile UpdatedSuccessfully!!! Please Login")
            setTimeout(()=>{
              sessionStorage.clear()
              navigate('/login')
            },2500)
          }
        }
    }
    
  return (
    <div>
      {/* button */}
      <button onClick={()=>setOffCanvas(true)} className='bg-black text-white flex rounded items-center border hover:bg-white hover:text-black p-2'><FaPencilAlt className='me-2' />Edit</button>
      {/* offcanvas */}
      {
        offCanvas &&
        <div>
        <div className='fixed inset-0 bg-gray-400/74 w-full h-full'></div>
        <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
            {/* header */}
            <div className='bg-black text-white px-3 py-4 flex justify-between text-2xl'>
                <h1>Update User Profile</h1>
                <FaX className='mt-1' onClick={()=>setOffCanvas(false)}/>
            </div>
            {/* body */}
            <div className='flex justify-center items-center flex-col my-5'>
              <label htmlFor="userProfile">
                <input onChange={e=>handleFileUpload(e)} type="file" id='userProfile' hidden />
                {
                  existingPicture == "" ?
                  <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview?preview:"https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"} alt="user" />
                  :
                  existingPicture.startsWith("https://lh3.googleusercontent.com/")?
                  <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview?preview:existingPicture} alt="user" />
                  :
                  <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview?preview:`${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="No Image" />
                }
                {/* <button className='bg-black text-white px-3 py-4 rounded z-53 fixed' style={{marginLeft:'230px',marginTop:'-26px'}}><FaPen /></button> */}
              </label>

              {!imageFile && <div className='mt-5 text-yellow-400 text-sm'>*Only Accsept Image File</div>}


              {/* username */}
              <div className='mt-6 mb-3 w-full px-5'>
                <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* new password */}
               <div className='mt-3 mb-3 w-full px-5'>
                <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* .confirm password */}
               <div className='mt-3 mb-3 w-full px-5'>
                <input value={userDetails.cPassword} onChange={e=>checkPassword(e.target.value)} type="password" placeholder='Confirm Password' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {!passwordMatch && <div className='mt-5 text-yellow-400 text-sm'>*Password Not Matching...Enter correct Password</div> }
              {/* bio */}
               <div className='mt-3 mb-3 w-full px-5'>
                <input value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" placeholder='Bio' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {/* reset and update button */}
              <div className='flex justify-end w-full px-5 mt-5'>
                <button onClick={resetProfile} className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                <button onClick={handleUpdateUser} className='bg-green-500 text-white p-3 rounded'>Update</button>
              </div>
            
         </div>
        </div>
      </div>
      }
      {/* toast container */}
       <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>
  )
}

export default Edit
