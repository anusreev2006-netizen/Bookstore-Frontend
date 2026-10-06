import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';

function Auth({insideRegister}) {

  const navigate = useNavigate()
  const [togglePassword,setTogglePassword] = useState(false)

  const formik = useFormik({
    initialValues:{
      username : "Username",
      email : "", 
      password : ""
    },
    validationSchema:Yup.object({
      username:Yup.string().min(3,"Must be atleast 3 charectors").required("Required"),
      email:Yup.string().email("Invalid Email").required("Required"),
      password:Yup.string().required("Required")
    }),
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      if(insideRegister){
        console.log("Register API Call");
        handleRegister(values)
     }else{
      console.log("Login API Call");
      handleLogin(values)
     }
     resetForm()
      
    }
  })

  const handleLogin = async(userData)=>{
    const result = await loginAPI(userData)
    console.log(result);
    if(result.status==200){
      toast.success("Successfully Logged in... ")
      sessionStorage.setItem("token",result.data.token)
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
    setTimeout(() => {
        if(result.data.user.role=="admin"){
        navigate('/admin')
      }else{
        navigate('/')
      }
    }, 2500);
    }else{
      toast.error(result)
    }
  }

  const handleRegister=async(userData)=>{
    const result = await registerAPI(userData)
    console.log(result);
    if(result.status==201){
      toast.success("Successfully Registered.. please Login!!!")
    }else{
      toast.error(result)
    }
    navigate("/login")
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/back.png)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className='text-center text-white font-bold text-3xl pb-3 '>BOOKSTORE</h1>
        <div style={{width:'400px'}} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center' >
            <FaUser className='text-3xl' />
          </div>
          <h1 className='2xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form onSubmit={formik.handleSubmit} className='my-5 w-full'>
            {/* username */}
            {
              insideRegister && 
              <>
              <input name='username' value={formik.values.username} onChange={formik.handleChange} className='bg-white  p-2 w-full rounded my-5 text-black'  type="text" placeholder='Username' />
              <div className='mb-5 text-yellow-400'>{formik.errors.username}</div>
              </>
            }
            {/* email */}
             <input name='email' value={formik.values.email} onChange={formik.handleChange} className='bg-white  p-2 w-full rounded my-5 text-black' placeholder='Email' type="email" />
             <div className='mb-5 text-yellow-400'>{formik.errors.email}</div>
            {/* password */} 
           
             <input name='password' value={formik.values.password} onChange={formik.handleChange} className='bg-white  p-2 w-full rounded my-5 text-black' placeholder='Password' type={togglePassword? "text" :"password"} />
             {
             togglePassword?
              <FaEyeSlash onClick={()=>setTogglePassword(!togglePassword)} className='text-gray-400 cursor-pointer' style={{marginTop:'-50px',marginLeft:'330px'}} />
              :
              <FaEye onClick={()=>setTogglePassword(!togglePassword)} className='text-gray-400 cursor-pointer' style={{marginTop:'-50px',marginLeft:'330px'}}/>
             }
             <div className='mb-5 mt-7 text-yellow-400'>{formik.errors.email}</div>
              {/* forgot password */}
        <div className='flex justify-between mb-5'>
          <p className='text-xs m-6 text-orange-300'>*Never Share your Password</p>
          {
            !insideRegister &&
            <button className='text-xs underline'>Foregot Password</button>
          }
        </div>
          {/* login/register button */}
          <div className='text-center'>
            {
              insideRegister ?
              <button type='submit' className='bg-green-600 p-2 w-full rounded'>Register</button>
              :
              <button type='submit' className='bg-green-600 p-2 w-full rounded'>Login</button>
            }
          </div>
          {
            !insideRegister &&
            <div className='my-5 text-center'>
              <p>.................or.................</p>
              <div className='mt-2 flex justify-center items-center w-full'>
                Google Authentication
              </div>
            </div>
          }
          {/* new/alredy */}
          <div className='text-center my-5'>
          {
            insideRegister ? 
            <p className='text-pink-300'>Existing User? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
            :
            <p className='text-pink-300'>Existing User? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
          }
          </div>
          </form>
         
        </div>
        
      </div>
      {/* toast container */}
       <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>
  )
}

export default Auth

